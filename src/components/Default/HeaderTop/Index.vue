<script setup>
  import HeaderContact from "@/components/Default/HeaderTop/HeaderContact.vue";
  import OpeningTime from "@/components/Default/HeaderTop/OpeningTime.vue";
</script>

<template>
  <div class="header-top d-none d-lg-block">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
            <HeaderContact />
        </div>
        <div class="col-lg-6">
            <OpeningTime />
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </div> <!-- header top -->
</template>
