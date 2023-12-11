<script lang="ts" setup>
import SelectLanguageInput from './LanguageSelection.vue'
</script>

<template>
  <footer class="footer-container">
    <div class="footer_nav-container">
      <nav>
        <div class="footer__contact-number">
          <p class="footer__contact-number-text">Questions? call</p>
          <a class="footer-link" href="tel:01 800 917 1563" aria-label="0 1. 8 0 0. 9 1 7. 1 5 6 3."
            >01 800 917 1563</a
          >
        </div>
        <div class="footer-col-container">
          <div class="footer-col">
            <ul class="footer-list_container">
              <li class="footer-list_item">
                <a href="http://" target="_blank" rel="noopener noreferrer" class="footer-link"
                  >FAQ</a
                >
              </li>
              <li class="footer-list_item">
                <a href="http://" target="_blank" rel="noopener noreferrer" class="footer-link">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <ul class="footer-list_container">
              <li class="footer-list_item">
                <a href="http://" target="_blank" rel="noopener noreferrer" class="footer-link"
                  >Help Center</a
                >
              </li>
              <li class="footer-list_item">
                <a href="http://" target="_blank" rel="noopener noreferrer" class="footer-link"
                  >Corporate Information</a
                >
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <ul class="footer-list_container">
              <li class="footer-list_item">
                <a href="http://" target="_blank" rel="noopener noreferrer" class="footer-link"
                  >Terms of Use</a
                >
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <ul class="footer-list_container">
              <li class="footer-list_item">
                <a href="http://" target="_blank" rel="noopener noreferrer" class="footer-link"
                  >Privacy</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SelectLanguageInput />
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background: rgba(0, 0, 0, 0.75);
  margin-top: 0;
  color: #737373;
}

.footer_nav-container {
  max-width: 1000px;
  margin: auto;
  padding: 30px 0;
}
.footer-col-container {
  display: flex;
  justify-content: space-between;
}

.footer-list_container {
  padding: 0;
  list-style: none;
}

.footer-list_item {
  margin-bottom: 16px;
}

.footer-link {
  text-decoration: none;
  color: #737373;
}

.footer__contact-number {
  margin-bottom: 30px;
  display: flex;
  align-items: end;
  gap: 5px;
}

.footer__contact-number-text {
  margin: unset;
}
</style>
