<template>
  <div>
    <b-navbar toggleable="lg" class="header-bg">
      <b-button class="d-block d-sm-none" @click="backClick" variant="primary"> <b-icon-chevron-left/> </b-button>
      <b-navbar-brand class="header-brand"><router-link to="/">Maboo</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="bg-light"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
<!--        <b-navbar-nav>-->
<!--          <b-nav-item href="#">Link</b-nav-item>-->
<!--          <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
<!--        </b-navbar-nav>-->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
<!--          <b-nav-form>-->
<!--            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--          </b-nav-form>-->

          <div class="d-block d-sm-none header-mobile-options">
<!--            <router-link tag="b-nav-item" to="/profile">Profile</router-link>-->
            <b-nav-item><router-link to="/"><b-icon-house/> Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/profile"><b-icon-person-circle /> Profile</router-link></b-nav-item>
            <b-nav-item @click="logout"><b-icon-door-closed /> Sign Out</b-nav-item>
          </div>

          <b-nav-item-dropdown class="d-none d-sm-block" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-avatar icon="gear"></b-avatar> <span class="mr-auto text-white">J. Circlehead</span>
            </template>
<!--            <b-dropdown-item href="#">Profile</b-dropdown-item>-->
            <router-link tag="b-dropdown-item" to="/profile"><b-icon-person-circle /> Profile</router-link>
            <b-dropdown-item @click="logout"><b-icon-door-closed /> Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { BIconChevronLeft, BIconPersonCircle, BIconDoorClosed, BIconHouse } from 'bootstrap-vue'

export default {
  components: {
    BIconChevronLeft,
    BIconPersonCircle,
    BIconDoorClosed,
    BIconHouse
  },
  methods: {
    backClick () {
      this.$router.back()
    },
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
