<template>
  <header>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
    </div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Jazz</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Blues</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Theory</nuxt-link>
        </li>
        <li
          @mouseenter="setHoveredElement('progress')"
          @mouseleave="removeHover()"
        >
          <nuxt-link to="/">My Progress</nuxt-link>
          <NavDropdown
            :parentHovered="
              hoveredElement === 'progress' || hoveredDropdown === 'progress'
            "
            :style="{ width: '15rem' }"
            @mouseenter="setHoveredSub('progress')"
            @mouseleave="hoveredDropdown = ''"
          >
            <div>
              <p class="dropdown-text">You haven't taken any courses yet</p>
            </div>
          </NavDropdown>
        </li>
      </ul>
    </nav>
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
            Guest Account:<br />
            <nuxt-link to="/login"> Login </nuxt-link>
            to gain full access
          </p>
        </div>
      </NavDropdown>
    </div>
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
  justify-content: space-evenly;
  nav {
    @include center-element;
    width: 100%;
    max-width: 500px;
    ul {
      @include center-element;
      justify-content: space-evenly;
      width: inherit;
      li {
        list-style: none;
        position: relative;
      }
      li,
      a {
        color: white;
      }
    }
  }
  .dropdown-text {
    color: white;
    font-weight: light;
    font-size: 14px;
    line-height: 2em;
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
</style>
