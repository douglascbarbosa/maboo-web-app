<template>
  <div>
    <b-navbar toggleable="lg" class="header-bg">
      <b-button v-if="showBackButton" class="d-block d-sm-none" @click="backClick" variant="primary"> <b-icon-chevron-left/> </b-button>
      <b-navbar-brand class="header-brand"><router-link to="/"><b-img width="50" src="../assets/logo-maboo.png" /></router-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="bg-light"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <div class="d-block d-sm-none header-mobile-options">
            <b-nav-item><router-link to="/"><b-icon-house/> Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/profile"><b-icon-person-circle /> Profile</router-link></b-nav-item>
            <b-nav-item><router-link to="/about"><b-icon-card-text /> About</router-link></b-nav-item>
            <b-nav-item @click="logout"><b-icon-door-closed /> Sign Out</b-nav-item>
          </div>
          <b-nav-item-dropdown class="d-none d-sm-block" right>
            <template v-slot:button-content>
              <b-avatar icon="gear"></b-avatar> <span class="mr-auto text-white">J. Circlehead</span>
            </template>
            <router-link tag="b-dropdown-item" to="/profile"><b-icon-person-circle /> Profile</router-link>
            <router-link tag="b-dropdown-item" to="/about"><b-icon-card-text /> About</router-link>
            <b-dropdown-item @click="logout"><b-icon-door-closed /> Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>
import { BIconChevronLeft, BIconPersonCircle, BIconDoorClosed, BIconHouse, BIconCardText } from 'bootstrap-vue'

/**
 * Component responsible to show the navbar with the user information.
 */
export default {
  components: {
    BIconChevronLeft,
    BIconPersonCircle,
    BIconDoorClosed,
    BIconHouse,
    BIconCardText
  },
  mounted () {
    // Only shows the back button on mobile version and when the route is difrent from Home.
    this.showBackButton = this.checkRoute(this.$router.currentRoute.name)
  },
  data () {
    return {
      showBackButton: false
    }
  },
  watch: {
    // Check the route when it changes to show or hide the back button form mobile version.
    $route: function (refreshPage) {
      this.showBackButton = this.checkRoute(refreshPage.name)
    }
  },
  methods: {
    /**
     * Execute the back click event to back the user to the last route.
     */
    backClick () {
      this.$router.back()
    },
    /**
     * Checks if the route name is differrent from Home to show the back button.
     * @param routeName
     * @return {boolean}
     */
    checkRoute (routeName) {
      return routeName !== 'Home'
    },
    /**
     * Event used to trigger user logout.
     */
    logout () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
  .header-bg {
    background-color: #854798;
  }
  .header-brand a {
    color: #ffffff;
    /*font-weight: 600;*/
    font-family: 'Permanent Marker', 'Roboto', sans-serif;
    font-size: 1.5rem;
  }
  .header-mobile-options a {
    color: #fff!important;
  }

  .btn-primary{color:#fff;background-color:transparent;border-color:transparent}

  .btn-primary:hover{color:#fff;background-color:transparent;border-color:transparent}
  .btn-primary:focus,.btn-primary.focus{box-shadow:0 0 0 .2rem rgba(0,90,90,0)}
  .btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:transparent;border-color:transparent}
  .btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:transparent;border-color:transparent}
  .btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,90,90,0)}

  .btn-outline-primary{color:teal;background-color:transparent;background-image:none;border-color:teal}.btn-outline-primary:hover{color:#222;background-color:transparent;border-color:transparent}
  .btn-outline-primary:focus,.btn-outline-primary.focus{box-shadow:0 0 0 .2rem rgba(0,90,90,0)}
  .btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#fff;background-color:transparent}
  .btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:transparent;border-color:transparent}
  .btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,128,128,0.5)}
</style>
