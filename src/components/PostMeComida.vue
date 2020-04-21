<template>
  <div id="comida">
    <header>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/about">Nosotros</router-link>
        <router-link to="/login">Iniciar Sesión</router-link>
        <router-link to="/general">Posts</router-link>
        <router-link to="/create">Publicar</router-link>
      </nav>
      <section class="textos-header">
        <h1>{{this.categories[this.idCategory-1].name_category}}</h1>        
      </section>
      <div class="wave" style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path
            d="M-5.42,86.94 C279.00,142.20 383.97,-97.59 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: rgb(255, 255, 255);"
          />
        </svg>
      </div>
    </header>
    <div v-for="(item, index) of posts" v-bind:key="index">
      <div :class="[index%2==0 ? 'container':'container2']">
        <div class="otro">
          <h1></h1>
        </div>
        <div class="content" v-if="index%2==0">
          <div class="bannerText">
            <div>
              <h2>{{item.title}}</h2>
              <p>{{item.content}}</p>
              <a href="#">Comentarios</a>
            </div>
          </div>
          <div class="bannerImg" id="slideshow">
            <img class="active" src="@/assets/Imagenes-comida/food6.jpg" alt />
          </div>
        </div>
        <div class="content" v-else>
          <div class="bannerImg" id="slideshow">
            <img class="active" src="@/assets/Imagenes-comida/food6.jpg" alt />
          </div>
          <div class="bannerText">
            <div>
              <h2>{{item.title}}</h2>
              <p>{{item.content}}</p>
              <a href="#">Comentarios</a>
            </div>
          </div>
        </div>
        <div class="bloguer">
          <div class="contenedor-bloguer">
            <div class="cards">
              <div class="card">
                <div class="imgBox">
                  <img src="@/assets/Imagenes-comida/face2.jpg" alt />
                </div>
                <div class="contenido-texto-card">
                  <h4>{{item.user.name}}</h4>
                </div>
              </div>
              <div class="comentarios">
                <h1>Haz un comentario</h1>
                <input type="text" />
                <a href="#">Enviar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paginacion">
      <button
        :disabled="pagination.prev_page!=null ? false:true"
        @click="getPostsCategory(pagination.prev_page)"
      >Anterior</button>
      <button
        :disabled="pagination.next_page!=null ? false:true"
        @click="getPostsCategory(pagination.next_page)"
      >Siguiente</button>
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
import api from "@/api";
import {mapState, mapMutations} from 'vuex';

export default {
  name: "PostMeComida",
  data() {
    return {
      posts: [],
      pagination: []
    };
  },
  methods: {
    async getPostsCategory(url) {
      const datos = await fetch(
        `https://software-app-blog.herokuapp.com/${url}`
      ).then(res => res.json());
      this.posts = datos["posts"];
      this.pagination = datos["meta"];
    },
  },
  computed: {
    ...mapState(['idCategory','categories'])
  },
  created() {
    //api.getPostsComida(1).then(posts => (this.posts = posts));
    this.getPostsCategory("posts/category?page=1&id="+this.idCategory);
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
  --gradiente: linear-gradient(
      to right,
      hsla(59, 100%, 50%, 0.38),
      hsla(59, 100%, 50%, 0.95)
    ),
    url(../assets/Imagenes-comida/fondo.jpg);
  --webkit-gradient: -webkit-linear-gradient(
      to right,
      hsla(59, 100%, 50%, 0.38),
      hsla(59, 100%, 50%, 0.95)
    ),
    url(../assets/Imagenes-comida/fondo.jpg);
}
/*---------------HEADER---------------*/
.waveuno {
  position: absolute;
  top: 0;
  width: 100%;
}

header {
  width: 100%;
  height: 685px;
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
  color: floralwhite;
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
header .textos-header {
  display: flex;
  height: 430px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.textos-header h1 {
  color: floralwhite;
  font-size: 50px;
  font-family: "Rock Salt", cursive;
}
.textos-header h2 {
  color: floralwhite;
  font-weight: 200;
  font-size: 25px;
  font-family: "Roboto Mono", monospace;
}

/* CONTENIDO-BLOG */
.otro {
  padding: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}
.otro h1 {
  color: var(--color-categoria);
  text-align: center;
  font-size: 60px;
  letter-spacing: 2px;
}
.container {
  position: relative;
  padding: 0 100px;
  min-height: 100vh;
}
.container:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 450px;
  height: 100%;
  background: var(--color-categoria);
  border-radius: 100% 0% 0% 100%/50% 0% 0% 50%;
  transform: scaleY(-1);
  z-index: -2;
}

.container2 {
  position: relative;
  padding: 0 100px;
  min-height: 100vh;
  margin-top: 100px;
}
.container2:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 450px;
  height: 100%;
  background: var(--color-categoria);
  border-radius: 0% 100% 100% 0%/0% 50% 50% 0%;
  transform: scaleY(-1);
  z-index: -2;
}
.container2 .vacio2 {
  position: relative;
  width: 420px;
  height: 100%;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.content .bannerText {
  position: relative;
  max-width: 800px;
}
.content .bannerText h2 {
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.2em;
  margin: 10px;
  color: #333;
}
.content .bannerText p {
  font-size: 18px;
  color: #333;
  line-height: 1.8em;
  margin: 0;
  text-align: justify;
}
.content .bannerText a {
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  color: #333;
  letter-spacing: 1px;
  font-size: 10px;
  text-decoration: none;
  padding: 15px;
  background: var(--color-categoria);
  border-radius: 5px;
}
.content .bannerImg {
  position: relative;
  margin-right: 25px;
  width: 440px;
  height: 440px;
  border-radius: 50%;
}
.content .bannerImg img {
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
.container .bloguer,
.container2 .bloguer {
  position: relative;
  width: 100%;
  height: 250px;
  margin-top: 60px;
}
.bloguer .contenedor-bloguer {
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
.contenedor-bloguer .cards {
  position: relative;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
  min-height: 10vh;
}
.card {
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
.card:hover {
  height: 300px;
}
.card .imgBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.card .imgBox img {
  max-width: 100%;
  opacity: 1;
  transition: 0.5s;
}
.card:hover .imgBox img {
  opacity: 1;
}
.card:before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: var(--color-categoria);
  z-index: -1;
}
.card:after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: var(--color-categoria);
  z-index: -2;
  filter: blur(10px);
}
.card:before,
.card:after {
  background: var(--gradiente);
}
.card .contenido-texto-card {
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
.card:hover .contenido-texto-card {
  opacity: 1;
}
.card .contenido-texto-card h4 {
  font-size: 25px;
  color: black;
  font-family: "Pacifico", cursive;
  line-height: 20px;
  letter-spacing: 2px;
}
/* BOTONES */
.iconos {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 110px;
  margin: 5px;
  padding: 25px;
}
.iconos .controladores {
  position: relative;
  display: flex;
  flex-direction: row;
}
.controladores a {
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
  background: var(--color-categoria);
  border-radius: 5px;
}

/* comentarios */
.cards .comentarios {
  position: relative;
  width: 600px;
  height: 250px;
  display: flex;
  flex-direction: column;
}
.comentarios h1 {
  position: relative;
  color: black;
  font-size: 25px;
  margin: 5px;
}
.comentarios input {
  position: relative;
  text-align: justify;
  width: 98%;
  height: 100%;
  margin: 5px;
  padding: 5px;
  border: 1px solid var(--color-categoria);
}
.comentarios a {
  width: 100px;
  height: 35px;
  background: var(--color-categoria);
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
.paginacion button{
  background: var(--color-categoria);
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
  color: white;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 20px;
}
/*---------------Galeria-Categorías---------------*/
.contenedor-categorias {
  margin: 0;
  padding: 0;
}
.titulob {
  color: #ffffff;
  font-size: 45px;
  font-family: "Rock Salt", cursive;
  text-align: center;
  margin: 0px;
  padding: 0px;
}
.contenedor-categorias .galeria-port {
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 10vh;
}
.galeria-port .imagen-port {
  position: relative;
  width: 280px;
  height: 210px;
  background: #ffffff;
  display: block;
  margin: 15px 32px;
  border-radius: 45px;
}
.galeria-port .imagen-port .imgbx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 45px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}
.galeria-port .imagen-port:hover .imgbx {
  width: 125px;
  height: 125px;
  left: -60px;
  top: calc(50% - 60px);
  transition: 0.5s ease-in-out;
  background: #894bf8;
}
.galeria-port .imagen-port .imgbx:before {
  content: attr(data-text);
  position: absolute;
  text-align: center;
  font-size: 2em;
  color: rgba(137, 75, 248);
  font-weight: 500;
  bottom: 10px;
  left: 0;
  width: 100%;
}
.galeria-port .imagen-port .imgbx img {
  max-width: 185px;
  transition: 0.5 ease-in-out;
}
.galeria-port .imagen-port:hover .imgbx img {
  max-width: 75px;
}
.galeria-port .imagen-port .hover-galeria {
  position: absolute;
  right: 0;
  width: calc(100% - 60px);
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.galeria-port .imagen-port .hover-galeria h3 {
  margin-bottom: 5px;
  font-size: 22px;
  color: #7f00ff;
}
.galeria-port .imagen-port .hover-galeria p {
  margin-bottom: 5px;
  font-size: 16px;
  text-align: justify;
}
.galeria-port .imagen-port .hover-galeria a {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 16px;
  background: #7f00ff;
  text-decoration: none;
  color: #ffffff;
}
</style>