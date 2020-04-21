<template>
  <div class="login">
    <PostMeLogin />
  </div>
</template>

<script>
import PostMeLogin from "@/components/PostMeLogin.vue";
export default {
  name: "Login",
  components: {
    PostMeLogin
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>