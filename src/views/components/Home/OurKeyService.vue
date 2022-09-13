<template>
  <section class="section section-lg pt-lg-0 ourkey">
    <div class="container">
      <div class="row justify-content-center text-center mb-sm">
        <div class="col-lg-8">
          <h2 class="display-3">Our Key Services</h2>
          <p class="lead text-muted">
            Lorem ipsum dolor Ipsam eveniet quam architectureo, aspernatur!
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row row-grid">
            <div class="col-lg-4">
              <card class="border-0" hover shadow body-classes="p-0">
                <img src="img/home/ground-shipping.jpg" class="img-ourkey" />
                <div class="py-5 px-4">
                  <!-- <icon
                    name="ni ni-check-bold"
                    type="primary"
                    rounded
                    class="mb-4"
                  >
                  </icon> -->
                  <h6 class="text-primary text-uppercase">Ground Shipping</h6>
                  <p class="description mt-3">
                    Lorem ipsum dolor, consectetur adipisicing elit. Similique
                    iusto veritatis solutadfdds recusandae consequatur, rerum
                  </p>
                  <div>
                    <badge type="primary" rounded>marketing</badge>
                    <badge type="primary" rounded>product</badge>
                    <badge type="primary" rounded>business</badge>
                  </div>
                  <base-button tag="a" href="#" type="primary" class="mt-4">
                    Read more
                  </base-button>
                </div>
              </card>
            </div>
            <div class="col-lg-4">
              <card class="border-0" hover shadow body-classes="p-0">
                <img src="img/home/big-project.jpg" class="img-ourkey" />
                <div class="py-5 px-4">
                  <!-- <icon
                    name="ni ni-istanbul"
                    type="success"
                    rounded
                    class="mb-4"
                  >
                  </icon> -->
                  <h6 class="text-success text-uppercase">Large Project</h6>
                  <p class="description mt-3">
                    Lorem ipsum dolor, consectetur adipisicing elit. Similique
                    iusto veritatis solutadfdds recusandae consequatur, rerum
                  </p>

                  <div>
                    <badge type="success" rounded>business</badge>
                    <badge type="success" rounded>vision</badge>
                    <badge type="success" rounded>success</badge>
                  </div>
                  <base-button tag="a" href="#" type="success" class="mt-4">
                    Read more
                  </base-button>
                </div>
              </card>
            </div>
            <div class="col-lg-4">
              <card class="border-0" hover shadow body-classes="p-0">
                <img src="img/home/airfreight.jpg" class="img-ourkey" />
                <div class="py-5 px-4">
                  <!-- <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                  </icon> -->
                  <h6 class="text-warning text-uppercase">Air Freight</h6>
                  <p class="description mt-3">
                    Lorem ipsum dolor, consectetur adipisicing elit. Similique
                    iusto veritatis solutadfdds recusandae consequatur, rerum
                  </p>
                  <div>
                    <badge type="warning" rounded>marketing</badge>
                    <badge type="warning" rounded>product</badge>
                    <badge type="warning" rounded>launch</badge>
                  </div>
                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Read more
                  </base-button>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.ourkey {
  img {
    max-width: 100%;
  }
  .img-ourkey {
  }
}
</style>
