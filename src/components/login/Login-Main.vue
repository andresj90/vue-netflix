<script lang="ts" setup>
import LoginHeader from './Login-Header.vue'
import Footer from '../footer/Footer-Secondary.vue'
</script>

<template>
  <div class="login-main-container">
    <div class="login-background-container">
      <img
        class="concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/f2da18b8-d120-4e5d-8aac-ecaea4625dff/CO-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcset="
          https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/f2da18b8-d120-4e5d-8aac-ecaea4625dff/CO-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg  1000w,
          https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/f2da18b8-d120-4e5d-8aac-ecaea4625dff/CO-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w,
          https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/f2da18b8-d120-4e5d-8aac-ecaea4625dff/CO-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg  1800w
        "
        alt=""
      />
    </div>
    <div class="login-header-container">
      <div class="login-header-inner-container">
        <LoginHeader />
      </div>
    </div>
    <div class="login_body"></div>
    <div class="login_footer">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.login-main-container {
  margin: 0;
  min-height: 100%;
  padding: 0;
  position: relative;
  z-index: 0;
}
.login-background-container {
  background-size: cover;
  display: block;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
  opacity: 0.5;
}

.login-header-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.login-header-inner-container {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent);
  border-bottom: transparent;
  padding: 20px 50px;
}

.login_body {
  min-height: 85vh;
}
.login_footer {
  position: relative;
}
</style>
