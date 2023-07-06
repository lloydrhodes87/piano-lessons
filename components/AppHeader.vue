<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Jazz</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Blues</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Theory</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Forum</nuxt-link>
        </li>
      </ul>
      <div
        class="profile-container"
        @mouseenter="setHoveredElement('profile')"
        @mouseleave="removeHover()"
      >
        <Icon
          name="ic:round-person"
          color="white"
          size="2em"
          class="profile-icon"
        />
        <NavDropdown
          :parentHovered="
            hoveredElement === 'profile' || hoveredDropdown === 'profile'
          "
          :style="{ width: '15rem' }"
          @mouseenter="setHoveredSub('profile')"
          @mouseleave="hoveredDropdown = ''"
        >
          <div v-if="authStore.access === 'guest'">
            <p class="dropdown-text">
              Guest Account.
              <nuxt-link to="/login"> Login </nuxt-link>
              to gain full access
            </p>
          </div>
        </NavDropdown>
      </div>

      <template>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          ></path>
        </svg>
      </template>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/authStore';
import { ref } from 'vue';
const authStore = useAuthStore();

const hoveredElement = ref('');
const hoveredDropdown = ref('');

function setHoveredElement(element: string) {
  hoveredElement.value = element;
}

function setHoveredSub(element: string) {
  hoveredDropdown.value = element;
}

function removeHover() {
  setTimeout(() => {
    if (hoveredDropdown.value === '') {
      hoveredElement.value = '';
    }
  }, 100);
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
@import '@/assets/styles/variables.scss';
header {
  height: 10vh;
  @include center-element;
  background-color: $grey4;
  border-bottom: 2px solid $blue3;
  nav {
    @include center-element;
    width: 100%;
    max-width: 600px;
    ul {
      @include center-element;
      justify-content: space-evenly;
      width: inherit;
      li {
        list-style: none;
      }
      li,
      a {
        color: white;
      }
    }
    .dropdown-text {
      color: white;
      font-weight: light;
      font-size: 14px;
      a {
        text-decoration: underline;
        text-underline-position: under;
      }
    }
    .profile-container {
      position: relative;
      .profile-icon {
        border-radius: 100%;
        border: 1px solid white;
        cursor: pointer;
      }
    }
  }
}
</style>
