<script setup>
  import PreLoader from "@/components/PreLoader.vue";
  import HeaderTop from "@/components/Default/HeaderTop/Index.vue";
  import HeaderLogo from "@/components/Default/HeaderLogoSupport/Index.vue";
  import NavBar from "@/components/Default/NavBar/Index.vue";
</script>

<template>

  <PreLoader />

  <!--====== HEADER PART START ======-->
  <header id="header-part">
      <HeaderTop />
      <HeaderLogo />
      <NavBar />
  </header>
  <!--====== HEADER PART ENDS ======-->

</template>

