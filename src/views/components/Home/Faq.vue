<template>
  <section class=" about-faq padding2">
    <div class="container">
      <div class="row">
        <div class="mb-2 col-sm-12 col-md-6 col-lg-6">
          <div class="case_studies_video  video_hoder">
            <div class="video_container">
              <div class="overlay" style="display: none;"></div>
              <a class="video_btn" href="#!" style="display: none;"> <i class="icofont icofont-play-alt-2"></i> </a>
              <iframe class="frame_video" width="100%" height="315" src="https://www.youtube.com/embed/OanNbn0AwiE?enablejsapi=1" allowfullscreen=""></iframe>
            </div>
          </div>
        </div>
        <div class="mb-2 col-sm-12 col-md-6 col-lg-6">
          <div class="logistics-content-area">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div class="panel">
                <div class="panel-heading" role="tab" id="headingOne">
                  <div class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" class="collapsed">
                    Why We Are The Best Company?
                    <span class="open-faq">
						          	<i class="fa fa-chevron-up"></i>
						          </span>
                    <span class="close-faq">
						          	<i class="fa fa-chevron-down"></i>
						          </span>
                  </a> </div>
                </div>
                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style="height: 0px;">
                  <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing illum noyeodos beatae quis ad. Itaque, iure. Hic dolore eaque, tenetur saepe tempora quidem sit aspernatur ad sint! </div>
                </div>
              </div>
              <div class="panel ">
                <div class="panel-heading" role="tab" id="headingTwo">
                  <div class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How ofter people gets delivery?
                    <span class="open-faq">
						          	<i class="fa fa-chevron-up"></i>
						          </span>
                    <span class="close-faq">
						          	<i class="fa fa-chevron-down"></i>
						          </span>
                  </a> </div>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false" style="height: 0px;">
                  <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing illum noyeodos beatae quis ad. Itaque, iure. Hic dolore eaque, tenetur saepe tempora quidem sit aspernatur ad sint! </div>
                </div>
              </div>
              <div class="panel">
                <div class="panel-heading" role="tab" id="headingThree">
                  <div class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How could i track my item?
                    <span class="open-faq">
						          	<i class="fa fa-chevron-up"></i>
						          </span>
                    <span class="close-faq">
						          	<i class="fa fa-chevron-down"></i>
						          </span>
                  </a> </div>
                </div>
                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false" style="height: 0px;">
                  <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing illum noyeodos beatae quis ad. Itaque, iure. Hic dolore eaque, tenetur saepe tempora quidem sit aspernatur ad sint! </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Faq"
}
</script>

<style scoped lang="scss" src="../../../assets/scss/components/home/faq.scss">
</style>
