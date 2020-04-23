<template>
  <div id="create">
    <header>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/about">Nosotros</router-link>
        <router-link to="/login">Iniciar Sesión</router-link>
        <router-link to="/general">Posts</router-link>
        <router-link to="/create">Publicar</router-link>
      </nav>
      <div class="wave" style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path
            d="M-5.42,86.94 C279.00,142.20 383.97,-97.59 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: rgb(255, 255, 255);"
          />
        </svg>
      </div>
    </header>
    <div class="container">
      <h1>¡Bienvenido!</h1>
      <p>Compartenos tus ideas y ayuda a otros a ser expertos como tu</p>
      <div class="contenedor-info">
        <h3>Ingresa un título a tu blog</h3>
        <input type="text" class="titulo-post" v-model="title" />
        <h3>
          Ahora compartenos tus ideas, eres libre de excribir lo que quieras
          <br />¡Deja volar tu imaginación!
        </h3>
        <input type="text" class="contenido-post" v-model="content" />
        <select name="categorias" v-model="category">
          <!-- <option value="32">{{categories}}</option> -->
          <option v-for="cat in categories" :key="cat.id">{{cat.name_category}}</option>
        </select>
        <!-- nombre del cuate -->
        <!-- <a href id="Guardar" @click="postear">Guardar</a> -->
        <button @click="postear">Guardar</button>
      </div>
    </div>
    <section class="portafolio">
      <div style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path
            d="M0.00,49.99 C128.89,193.51 249.66,-66.01 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
            style="stroke: none; fill: #ffffff;"
          />
        </svg>
      </div>
      <h2 class="titulob">NT</h2>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "PostMeCreate",
  data() {
    return {
      title: "",
      content: "",
      category: ""
    };
  },
  computed: {
    ...mapState(["categories"])
  },
  methods: {
    postear() {
      //Encontrando el índice del array de objetos categories
      let array = [];
      for (let index = 0; index < this.categories.length; index++) {
        let cat = this.categories[index].name_category;
        array.push(cat);
      }
      let id = array.indexOf(this.category);

      //Creación de parámetros para la petición
      var myHeaders = new Headers();
      myHeaders.append("Authorization", localStorage.getItem("token"));
      var raw = `{\n	"title": "${this.title}",\n	"content": "${
        this.content
      }",\n	"published": 1,\n	"user_id": ${localStorage.getItem(
        "id"
      )},\n	"category_id": ${id + 1}\n}`;

      var requestOptions = {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: raw,
        redirect: "follow"
      };

      //Petición a la API
      fetch("http://software-app-blog.herokuapp.com/posts", requestOptions)
        .then(response => console.log(response))
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
:root {
  --color-categoria: #f5f003;
  --color-categoria-imput: #fa8c3f;
  --gradiente: linear-gradient(
      to right,
      hsla(59, 100%, 50%, 0.38),
      hsla(59, 100%, 50%, 0.95)
    ),
    url(../assets/Imagenes-comida/fondo2.jpg);
  --webkit-gradient: -webkit-linear-gradient(
      to right,
      hsla(59, 100%, 50%, 0.38),
      hsla(59, 100%, 50%, 0.95)
    ),
    url(../assets/Imagenes-comida/fondo2.jpg);
}
/*---------------HEADER---------------*/
.waveuno {
  position: absolute;
  top: 0;
  width: 100%;
}

header {
  width: 100%;
  height: 255px;
  background: var(--color-categoria); /* fallback for old browsers*/
  background: var(--webkit-gradient); /* Chrome 10-25, Safari 5.1-6*/
  background: var(
    --gradiente
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  text-align: center;
}
nav {
  text-align: right;
  padding: 30px 50px 0 0;
}
nav > a {
  color: #333;
  /*font-weight: 300;*/
  font-family: "Pacifico", cursive;
  font-size: 18px;
  text-decoration: none;
  margin-right: 12px;
}
nav > a:hover {
  text-decoration: underline;
}
.wave {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.container {
  position: relative;
  padding: 0 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contenedor-info {
  position: relative;
  width: 100%;
  height: 750px;
  margin: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.contenedor-info h3 {
  color: #333;
  margin: 25px 0;
}
.contenedor-info input {
  border: 1px solid var(--color-categoria-imput);
  text-align: justify;
}
.contenedor-info .titulo-post {
  height: 50px;
}
.contenedor-info .contenido-post {
  height: 600px;
}
.contenedor-info button {
  width: 100px;
  height: 35px;
  background: var(--color-categoria);
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 1150px;
  text-transform: uppercase;
  font-weight: 700;
  color: #333;
  letter-spacing: 1px;
  font-size: 12px;
  text-decoration: none;
  padding: 10px;
}

.portafolio {
  margin-top: 45px;
  background: var(--color-categoria); /* fallback for old browsers*/
  background: var(--webkit-gradient); /* Chrome 10-25, Safari 5.1-6*/
  background: var(
    --gradiente
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
}
.portafolio h2 {
  text-align: center;
  color: #333;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 20px;
}
</style>