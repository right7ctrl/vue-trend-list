
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  created() {
    this.getGoogle();
    this.Twitter();
  },
  computed: {
    ...mapState(["google"]),
    ...mapState(["twitter"])
  },
  methods: {
    ...mapActions(["getGoogle"]),
    ...mapActions(["Twitter"])
  }
};
</script>

<template>
  <div class="hello">
    <div id="app" class="app">
      <header id="header" class="app-header">
        <div class="mobile-toggler">
          <button type="button" class="menu-toggler" data-toggle="sidebar-mobile">
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>

        <div class="brand">
          <div class="desktop-toggler">
            <i class="fa fa-home"></i>
          </div>
          <a href="#" class="brand-logo">Trendler</a>
        </div>

        <div class="menu">
          <form class="menu-search" method="POST" name="header_search_form">
            <div class="menu-search-icon">
              <i class="fa fa-search"></i>
            </div>
            <div class="menu-search-input">
              <input type="text" class="form-control" placeholder="Search menu..." />
            </div>
          </form>

          <div class="menu-item dropdown">
            <a href="#" data-toggle="dropdown" data-display="static" class="menu-link">
              <div class="menu-img online">
                <img
                  src="https://www.waspcom.com/wp-content/uploads/2014/10/user-placeholder-circle-1-300x300.png"
                  alt
                  class="mw-100 mh-100 rounded-circle"
                />
              </div>
              <div class="menu-text">
                <span
                  class="__cf_email__"
                  data-cfemail="116274707f6579747c7451767c70787d3f727e7c"
                >bişey</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      <div id="content" class="app-content">
        <div class="row">
          <div class="col-6">
            <div class="card mb-3">
              <div class="card-body">
                <div class="d-flex mb-3">
                  <div class="flex-grow-1">
                    <h5 class="mb-1">Google</h5>
                    <div class="fs-13px">Bugünün en çok arananları</div>
                  </div>
                </div>

                <div class="fs-13px">
                  <div
                    v-for="item in google.data.trends"
                    :key="item.title.query"
                    class="d-flex align-items-center mb-2"
                  >
                    <div class="flex-grow-1 d-flex align-items-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
                        class="fs-9px text-primary mr-2"
                        width="18"
                        height="18"
                        alt
                      />
                      <a target="_blank" :href="item.articles[0].url">{{item.title.query}}</a>
                    </div>
                    <div class="font-weight-600 text-dark">{{item.formattedTraffic}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card mb-3">
              <div class="card-body">
                <div class="d-flex mb-3">
                  <div class="flex-grow-1">
                    <h5 class="mb-1">Twitter</h5>
                    <div class="fs-13px">Bugünün en çok izlenenleri</div>
                  </div>
                </div>

                <div class="fs-13px">
                  <div
                    v-for="item in twitter.data.trends"
                    :key="item.title"
                    class="d-flex align-items-center mb-2"
                  >
                    <div class="flex-grow-1 d-flex align-items-center">
                      <img
                        src="data:image/png;base64,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"
                        class="fs-9px text-primary mr-2"
                        width="18"
                        height="18"
                        alt
                      />
                      <a target="_blank" :href="item.views"></a>
                    </div>
                    <div class="font-weight-600 text-dark title-st">{{item.title.trim()}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://seantheme.com/studio/assets/css/app.min.css");
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.app-content {
  margin-left: 0px !important;
}

.title-st {
  width: 95%;
}
</style>
