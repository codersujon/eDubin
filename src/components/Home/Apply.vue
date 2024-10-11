<script setup>
  import PrimaryBtn from "@/components/Default/Primary/PrimaryBtn.vue";
  const aff = "Apply for fall 2019";
  const aff_content = "Gravida nibh vel velit auctor aliquetn sollicitudirem sem quibibendum auci elit cons equat ipsutis sem nibh id elituis sed odio sit amet nibh vulputate cursus equat ipsutis.";
  const afs = "Apply for scholarship";
  const afs_content = "Gravida nibh vel velit auctor aliquetn sollicitudirem sem quibibendum auci elit cons equat ipsutis sem nibh id elituis sed odio sit amet nibh vulputate cursus equat ipsutis.";
</script>

<template>
  <section id="apply-aprt" class="pb-120">
    <div class="container">
      <div class="apply">
        <div class="row no-gutters">
          <div class="col-lg-6">
            <div class="apply-cont apply-color-1">
              <h3>{{ aff }}</h3>
              <p>{{ aff_content }}</p>
              <PrimaryBtn label="Apply Now" link="#"/>
            </div> <!-- apply cont -->
          </div>
          <div class="col-lg-6">
            <div class="apply-cont apply-color-2">
              <h3>{{ afs }}</h3>
              <p>{{ afs_content }}</p>
              <PrimaryBtn label="Apply Now" link="#"/>
            </div> <!-- apply cont -->
          </div>
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </section>
</template>
