<template>
  <div class="post">
    <PostMePost />
  </div>
</template>

<script>
// @ is an alias to /src
import PostMePost from "@/components/PostMePost.vue";

export default {
  name: "Home",
  components: {
    PostMePost
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>