<script setup>

</script>

<template>

  <footer id="footer-part">
      <div class="footer-top pt-40 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-about mt-40">
                <div class="logo">
                  <a href="#"><img src="../assets/images/logo-2.png" alt="Logo"></a>
                </div>
                <p>Gravida nibh vel velit auctor aliquetn quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
                <ul class="mt-20">
                  <li><RouterLink to="#"><i class="fa fa-facebook-f"></i></RouterLink></li>
                  <li><RouterLink to="#"><i class="fa fa-twitter"></i></RouterLink></li>
                  <li><RouterLink to="#"><i class="fa fa-google-plus"></i></RouterLink></li>
                  <li><RouterLink to="#"><i class="fa fa-instagram"></i></RouterLink></li>
                </ul>
              </div> <!-- footer about -->
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-link mt-40">
                <div class="footer-title pb-25">
                  <h6>Sitemap</h6>
                </div>
                <ul>
                  <li>
                    <RouterLink to="/"><i class="fa fa-angle-right"></i>Home</RouterLink>
                  </li>
                  <li><RouterLink to="/about"><i class="fa fa-angle-right"></i>About us</RouterLink></li>
                  <li><RouterLink to="/courses"><i class="fa fa-angle-right"></i>Courses</RouterLink></li>
                  <li><RouterLink to="/blog"><i class="fa fa-angle-right"></i>News</RouterLink></li>
                  <li><RouterLink to="/events"><i class="fa fa-angle-right"></i>Event</RouterLink></li>
                </ul>
                <ul>
                  <li><RouterLink to="#"><i class="fa fa-angle-right"></i>Gallery</RouterLink></li>
                  <li><RouterLink to="/shop"><i class="fa fa-angle-right"></i>Shop</RouterLink></li>
                  <li><RouterLink to="/teachers"><i class="fa fa-angle-right"></i>Teachers</RouterLink></li>
                  <li><RouterLink to="#"><i class="fa fa-angle-right"></i>Support</RouterLink></li>
                  <li><RouterLink to="/contact"><i class="fa fa-angle-right"></i>Contact</RouterLink></li>
                </ul>
              </div> <!-- footer link -->
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="footer-link support mt-40">
                <div class="footer-title pb-25">
                  <h6>Support</h6>
                </div>
                <ul>
                  <li><RouterLink to="#"><i class="fa fa-angle-right"></i>FAQS</RouterLink></li>
                  <li><RouterLink to="#"><i class="fa fa-angle-right"></i>Privacy</RouterLink></li>
                  <li><RouterLink to="#"><i class="fa fa-angle-right"></i>Policy</RouterLink></li>
                  <li><RouterLink to="#"><i class="fa fa-angle-right"></i>Support</RouterLink></li>
                  <li><RouterLink to="#"><i class="fa fa-angle-right"></i>Documentation</RouterLink></li>
                </ul>
              </div> <!-- support -->
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-address mt-40">
                <div class="footer-title pb-25">
                  <h6>Contact Us</h6>
                </div>
                <ul>
                  <li>
                    <div class="icon">
                      <i class="fa fa-home"></i>
                    </div>
                    <div class="cont">
                      <p>143 castle road 517 district, kiyev port south Canada</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fa fa-phone"></i>
                    </div>
                    <div class="cont">
                      <p>+3 123 456 789</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fa fa-envelope-o"></i>
                    </div>
                    <div class="cont">
                      <p>info@yourmail.com</p>
                    </div>
                  </li>
                </ul>
              </div> <!-- footer address -->
            </div>
          </div> <!-- row -->
        </div> <!-- container -->
      </div> <!-- footer top -->

      <div class="footer-copyright pt-10 pb-25">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="copyright text-md-left text-center pt-15">
                <p><RouterLink target="_blank" href="https://codersujon.com/">CODERS</RouterLink> </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="copyright text-md-right text-center pt-15">

              </div>
            </div>
          </div> <!-- row -->
        </div> <!-- container -->
      </div> <!-- footer copyright -->
  </footer>

  <!--====== BACK TO TP PART START ======-->

  <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>

  <!--====== BACK TO TP PART ENDS ======-->
</template>
