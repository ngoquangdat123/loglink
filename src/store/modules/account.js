import { userService } from '../../services';
import router from "@/router"

const user = JSON.parse(localStorage.getItem('user'));
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const state = user
    ? { status: true, user, currentUser: currentUser }
    : { status: {}, user: null , currentUser: null};

const actions = {
    login({ dispatch, commit }, { email, password }) {
        commit('loginRequest', { email });

        userService.login(email, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    router.push('/');
                    userService.fetchCurrentUser().then(
                        currentUser => {
                            localStorage.setItem('currentUser', JSON.stringify(currentUser));
                            commit('setCurrentUser', currentUser)
                        }
                    )
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }) {
        userService.logout();
        commit('logout');
        commit('setCurrentUser', {})
    },
    register({ dispatch, commit }, user) {
        commit('registerRequest', user);

        userService.register(user)
            .then(
                user => {
                    commit('registerSuccess', user);
                    router.push('/login');
                    setTimeout(() => {
                        // hiển thị message thành công sau redirect sang trang
                        dispatch('alert/success', 'Registration successful', { root: true });
                    })
                },
                error => {
                    commit('registerFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state, user) {
        state.status = { registering: true };
    },
    registerSuccess(state, user) {
        state.status = {};
    },
    registerFailure(state, error) {
        state.status = {};
    },
    setCurrentUser(state, payload) {
        state.currentUser = payload;
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};
