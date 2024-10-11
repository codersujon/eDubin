<script setup>
  import {RouterLink} from "vue-router";
  import PreLoader from "@/components/PreLoader.vue";
  import HeaderTop from "@/components/HeaderTop/Index.vue";
  import HeaderLogo from "@/components/HeaderLogoSupport/Index.vue";
</script>

<template>

  <PreLoader />

  <!--====== HEADER PART START ======-->
  <header id="header-part">

    <HeaderTop />

    <HeaderLogo />

    <div class="navigation">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-md-10 col-sm-9 col-8">
            <nav class="navbar navbar-expand-lg">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

              <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <RouterLink class="active" to="/">Home</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/about">About us</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/courses">Courses</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/events">Events</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/teachers">Our teachers</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/blog">Blog</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/shop">Shop</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/contact">Contact</RouterLink>
                  </li>
                </ul>
              </div>
            </nav> <!-- nav -->
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-4">
            <div class="right-icon text-right">
              <ul>
                <li><a href="#" id="search"><i class="fa fa-search"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-bag"></i><span>0</span></a></li>
              </ul>
            </div> <!-- right icon -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
    </div>

  </header>
  <!--====== HEADER PART ENDS ======-->

</template>

