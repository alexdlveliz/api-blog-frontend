<template>
  <div id="comida">
    <PostMeComida />
  </div>
</template>

<script>
// @ is an alias to /src
import PostMeComida from "@/components/PostMeComida.vue";

export default {
  name: "Comida",
  components: {
    PostMeComida
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>