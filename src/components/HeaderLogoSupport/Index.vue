<script setup>
  import Logo from "@/components/HeaderLogoSupport/Logo.vue";
  import Support from "@/components/HeaderLogoSupport/Support.vue";
  import PrimaryBtn from "@/components/Primay/PrimaryBtn.vue";
</script>

<template>
  <div class="header-logo-support pt-30 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
            <Logo />
        </div>
        <div class="col-lg-8 col-md-8">
          <div class="support-button float-right d-none d-md-block">
              <Support />
            <div class="button float-left">
              <PrimaryBtn label="Apply Now" link="/"/>
            </div>
          </div>
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </div> <!-- header logo support -->
</template>
