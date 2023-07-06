<template>
  <div class="form-container">
    <div class="image-block">
      <h1>
        Jazz and Blues<br />
        Piano Lessons<br />
        Online
      </h1>
    </div>
    <form @submit.prevent="handleLogin">
      <BaseInput label="Email" name="email" type="email" />
      <BaseInput label="Password" name="password" type="password" />
      <div class="button-container">
        <BaseButton type="button" buttonText="Login" />
      </div>
      <p>
        or
        <nuxt-link to="/" @click="continueAsGuest">continue as guest</nuxt-link>
      </p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store/authStore';

const authStore = useAuthStore();
function handleLogin() {
  console.log('logging in');
}

function continueAsGuest() {
  authStore.setAccess('guest');
}

definePageMeta({
  layout: false,
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';
.form-container {
  @include center-element;

  height: 100vh;
  .image-block {
    background-image: radial-gradient(rgba(0, 0, 255, 0.4), $grey1 70%),
      url('@/assets/images/piano.jpg');

    width: 50ch;
    height: 50ch;

    background-size: cover;

    background-repeat: no-repeat;
    @include center-element;
    h1 {
      color: white;
      text-align: center;
      font-size: 3rem;
    }
  }
  form {
    @include center-element;
    flex-direction: column;

    border-radius: 2px;
    //   height: 100vh;
    width: 60ch;
    height: 50ch;
    .button-container {
      // display: flex;
      // justify-content: ce-end;
      width: 100%;
      max-width: 400px;
      margin: 1rem 0 1.2rem 0;
      text-align: center;
    }
  }
  p,
  a {
    color: white;
  }
  a {
    text-decoration: underline;
    text-underline-position: under;
  }
}
</style>
