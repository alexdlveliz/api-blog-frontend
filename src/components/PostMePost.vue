<template>
  <div id="post">
    <div class="header-post">
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/about">Nosotros</router-link>
        <router-link to="/login">Iniciar Sesión</router-link>
        <router-link to="/general">Posts</router-link>
        <router-link to="/create">Publicar</router-link>
      </nav>
      <div class="wave-post" style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path
            d="M-5.42,86.94 C279.00,142.20 383.97,-97.59 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: rgb(255, 255, 255);"
          />
        </svg>
      </div>
    </div>
    <div class="container-post">
      <div class="content-post" id="uno">
        <div class="bannerText-post">
          <div>
            <h2>{{post.title}}</h2>
            <p>{{post.content}}</p>
          </div>
        </div>
        <div class="bannerImg-post" id="slideshow">
          <img src="../assets/Imagenes-comida/food6.jpg" alt />
        </div>
      </div>
      <div class="bloguer-post">
        <div class="contenedor-bloguer-post">
          <div class="cards-post">
            <!-- <h3>Autor</h3> -->
            <div class="card-post">
              <div class="imgBox-post">
                <img src="../assets/Imagenes-comida/face2.jpg" alt />
              </div>
              <div class="contenido-texto-card-post">
                <h4>{{post.user.name}}</h4>
              </div>
            </div>
            <div class="comentarios-post">
              <h1>Haz un comentario</h1>
              <input type="text" placeholder="Escribe algo" v-model="comment" />
              <a href="#" @click="publishComment">Enviar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comentario-card-post" id="modal">
      <div class="flex-post" id="flex">
        <div class="contenido-modal-post">
          <div class="modal-header-post">
            <h2>Comentarios</h2>
            <div class="modal-body-post">
              <div
                class="comentario-cont-post"
                v-for="(item, index) of comments"
                v-bind:key="index"
              >
                <h3>{{ item.user.name }}</h3>
                <p>{{ item.content }}</p>
              </div>
            </div>
            <div class="modal-footer-post"></div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="botones"
      :disabled="pagination.prev_page!=null ? false:true"
      @click="getPosts(pagination.prev_page)"
    >Anterior</button>
    <button
      class="botones"
      :disabled="pagination.next_page!=null ? false:true"
      @click="getPosts(pagination.next_page)"
    >Siguiente</button>
    <section class="portafolio-post">
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
import api from "@/api";

export default {
  name: "PostMePost",
  data() {
    return {
      comments: [],
      pagination: [],
      comment: ""
    };
  },
  methods: {
    async getComments(url) {
      const datos = await fetch(
        `https://software-app-blog.herokuapp.com/${url}`
      ).then(res => res.json());
      this.pagination = datos.meta;
      this.comments = datos.comments;
    },
    publishComment() {
      //Creación de la petición
      let user_id = localStorage.getItem("id");
      let post_id = this.post.comments_link.split("=")[1];
      api.publishComment(this.comment, user_id, post_id);
    }
  },
  computed: {
    ...mapState(["post"])
  },
  created() {
    this.getComments(this.post.comments_link);
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
  --gradiente-bloguer: linear-gradient(0deg, #f5f003, #f5f003);
  --color-categoria-post: #f5f003;
  --color-categoria-input-post: #f5f003;
  --gradiente-post: linear-gradient(
      to right,
      hsla(0, 0%, 0%, 0.58),
      hsla(0, 0%, 0%, 0.55)
    ),
    url(../assets/Imagenes-comida/fondo2.jpg);
  --webkit-gradient-post: -webkit-linear-gradient(
      to right,
      hsla(0, 0%, 0%, 0.5),
      hsla(0, 0%, 0%, 0.5)
    ),
    url(../assets/Imagenes-comida/fondo2.jpg);
}
/*---------------HEADER---------------*/
.waveuno-post {
  position: absolute;
  top: 0;
  width: 100%;
}

.header-post {
  width: 100%;
  height: 250px;
  background: var(--color-categoria-post); /* fallback for old browsers*/
  background: var(--webkit-gradient-post); /* Chrome 10-25, Safari 5.1-6*/
  background: var(
    --gradiente-post
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  text-align: center;
}
.header-post nav {
  text-align: right;
  padding: 25px 50px 0 0;
}
.header-post nav > a {
  color: var(--color-categoria-post);
  /*font-weight: 300;*/
  font-family: "Pacifico", cursive;
  font-size: 22px;
  text-decoration: none;
  margin-right: 12px;
}
.header-post nav > a:hover {
  text-decoration: underline;
}
.wave-post {
  position: absolute;
  bottom: 0;
  width: 100%;
}
/* Contenedor post */
.otro-post {
  padding: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}
.otro-post h1 {
  color: var(--color-categoria-post);
  text-align: center;
  font-size: 60px;
  letter-spacing: 2px;
}
.container-post {
  position: relative;
  padding: 0 100px;
  min-height: 100vh;
}
.container-post:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 450px;
  height: 100%;
  background: var(--color-categoria-post);
  border-radius: 100% 0% 0% 100%/50% 0% 0% 50%;
  transform: scaleY(-1);
  z-index: -2;
}
.content-post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.content-post .bannerText-post {
  position: relative;
  max-width: 800px;
}
.content-post .bannerText-post h2 {
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.2em;
  margin: 10px;
  color: #333;
}
.content-post .bannerText-post p {
  font-size: 18px;
  color: #333;
  line-height: 1.8em;
  margin: 0;
  text-align: justify;
}
.content-post .bannerText-post a {
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  color: #333;
  letter-spacing: 1px;
  font-size: 10px;
  text-decoration: none;
  padding: 15px;
  background: var(--color-categoria-post);
  border-radius: 5px;
}
.content-post .bannerImg-post {
  position: relative;
  margin-right: 25px;
  width: 440px;
  height: 440px;
  border-radius: 50%;
}
.content-post .bannerImg-post img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  opacity: 1;
}

/* Bloguers */
.container-post .bloguer-post,
.container2-post .bloguer-post {
  position: relative;
  width: 100%;
  height: 250px;
  margin-top: 60px;
}
.bloguer-post .contenedor-bloguer-post {
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  margin-bottom: 0px;
  display: flex;
  flex-wrap: wrap-reverse;
}
.contenedor-bloguer-post .cards-post {
  position: relative;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
  min-height: 10vh;
}
.card-post {
  position: relative;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 15px;
  background: #ffffff;
  transition: 0.5s;
}
.card-post:hover {
  height: 300px;
}
.card-post .imgBox-post {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.card-post .imgBox-post img {
  max-width: 100%;
  opacity: 1;
  transition: 0.5s;
}
.card-post:hover .imgBox-post img {
  opacity: 1;
}
.card-post:before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: var(--color-categoria-post);
  z-index: -1;
}
.card-post:after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: var(--color-categoria-post);
  z-index: -2;
  filter: blur(10px);
}
.card-post:before,
.card-post:after {
  background: var(--gradiente-bloguer);
}
.card-post .contenido-texto-card-post {
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 25px;
  /* border-radius: 50%; */
  background: rgba(248, 248, 248, 0.01);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: 0.5s;
}
.card-post:hover .contenido-texto-card-post {
  opacity: 1;
}
.card-post .contenido-texto-card-post h4 {
  font-size: 25px;
  color: black;
  font-family: "Pacifico", cursive;
  line-height: 20px;
  letter-spacing: 2px;
}
/* BOTONES */
.iconos-post {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 110px;
  margin: 5px;
  padding: 25px;
}
.iconos-post .controladores-post {
  position: relative;
  display: flex;
  flex-direction: row;
}
.controladores-post a {
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  color: #333;
  letter-spacing: 1px;
  font-size: 12px;
  text-decoration: none;
  padding: 10px;
  margin: 0 7px;
  background: var(--color-categoria-post);
  border-radius: 5px;
}

/* Hacer comentarios */
.cards-post .comentarios-post {
  position: relative;
  width: 600px;
  height: 250px;
  display: flex;
  flex-direction: column;
}
.comentarios-post h1 {
  position: relative;
  color: black;
  font-size: 25px;
  margin: 5px;
}
.comentarios-post input {
  position: relative;
  text-align: justify;
  outline: none;
  width: 98%;
  height: 100%;
  margin: 5px;
  padding: 5px;
  border: 1px solid var(--color-categoria-input-post);
}
.comentarios-post a {
  width: 100px;
  height: 35px;
  background: var(--color-categoria-post);
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 460px;
  text-transform: uppercase;
  font-weight: 700;
  color: #333;
  letter-spacing: 1px;
  font-size: 12px;
  text-decoration: none;
  padding: 10px;
}
/* ver comentarios */
.flex-post {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comentario-card-post {
  width: 100%;
}
.contenido-modal-post {
  position: relative;
  background: #ffffff;
  border-radius: 25px;
  margin: 55px auto;
  width: 90%;
  box-shadow: 0 0 6px 0 rgba(248, 248, 248, 0.4);
}
.close-post {
  color: white;
  font-size: 30px;
  font-weight: bold;
}
.close-post:hover {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal-header-post {
  padding: 8px 16px;
  display: flex;
  flex-wrap: wrap-reverse;
  border: 2px solid var(--color-categoria-post);
  border-radius: 15px;
  background: var(--color-categoria-post);
}
.modal-header-post h2 {
  font-size: 20px;
}
.modal-body-post {
  position: relative;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
}
.modal-body-post .comentario-cont-post {
  position: relative;
  margin: 5px;
}
.comentario-cont-post h3 {
  text-align: left;
}
.comentario-cont-post p {
  text-align: justify;
  letter-spacing: 1px;
}

/* Footer */
.portafolio-post {
  margin-top: 0px;
  background: var(--color-categoria-post); /* fallback for old browsers*/
  background: var(--webkit-gradient-post); /* Chrome 10-25, Safari 5.1-6*/
  background: var(
    --gradiente-post
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
}
.portafolio-post h2 {
  text-align: center;
  color: #333;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 20px;
}

/* BORDE COLOREADO */
/* .ver-cat .borde-col::before,
.ver-cat .borde-col::after {
  content: "";
  position: absolute;
  left: -8px;
  top: -8px;
  background: var(--colores);
  background-size: 300%;
  width: calc(100% +16px);
  height: calc(100%+16px);
  z-index: -1;
  animation: BGgradient 15s ease infinite;
}
@keyframes BGgradient {
  0% {
    background-position: 0% 200%;
  }
  50% {
    background-position: 200% 0%;
  }
  100% {
    background-position: 0% 330%;
  }
}
.borde-col::after {
  filter: brightness(1.4);
  filter: drop-shadow(16px 16px 20px rgb(248, 220, 97));
  filter: blur(15px);
} */
</style>
