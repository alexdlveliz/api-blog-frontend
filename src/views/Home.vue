<template>
  <div class="home">
    <PostMeHome />
  </div>
</template>

<script>
// @ is an alias to /src
import PostMeHome from "@/components/PostMeHome.vue";

export default {
  name: "Home",
  components: {
    PostMeHome
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
