<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="post in posts" :key="post.id">
      <h4>Título: {{ post.title }}</h4>
      <h4>Contenido: {{ post.content }}</h4>
      <p>Categoría: {{ post.category.name }}</p>
      <p>Creado por: {{ post.user.name }}</p>
    </h2>
    
  </div>
</template>

<script>
//Importo el archivo para realizar la comunicación con la api
import api from '@/api'

export default {
  name: 'About',

  data(){
    return {
      //Array para guardar los posts devueltos por la api
      posts: []
    }
  },

  //Cuando se cree este componente se ejecutará el método 'getPosts'
  created(){
    //Se llama al método getPosts creado en el archivo src/api.js
    api.getPosts()
      .then(posts => (this.posts = posts))
  }
  
}
</script>