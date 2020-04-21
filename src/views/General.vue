<template>
  <div id="general">
    <PostMeGeneral />
  </div>
</template>

<script>
// @ is an alias to /src
import PostMeGeneral from "@/components/PostMeGeneral.vue";

export default {
  name: "General",
  components: {
    PostMeGeneral
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>