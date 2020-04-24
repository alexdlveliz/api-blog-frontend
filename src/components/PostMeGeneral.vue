<template>
  <div id="general">
    <div class="header-gen">
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/about">Nosotros</router-link>
        <router-link to="/login">Iniciar Sesión</router-link>
        <router-link to="/general">Posts</router-link>
        <router-link to="/create">Publicar</router-link>
      </nav>
      <section class="textos-header-gen">
        <h1>Posts</h1>
        <h2>En esta seccion encontraras todos nuestros post, si deseas leer sobre algo en específico</h2>
        <div class="ver-cat">
          <router-link to="/category">
            <a>click aquí para ver por categorias</a>
          </router-link>
        </div>
      </section>
      <div class="wave-gen" style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path
            d="M-5.42,86.94 C279.00,142.20 383.97,-97.59 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: rgb(255, 255, 255);"
          />
        </svg>
      </div>
    </div>
    <div v-for="(item, index) of posts" v-bind:key="index">
      <div :class="[index%2==0 ? 'container':'container2']">
        <div class="otro">
          <h1></h1>
        </div>
        <div class="content" v-if="index%2==0">
          <div class="bloguer">
            <div class="contenedor-bloguer">
              <div class="cards">
                <div class="card">
                  <div class="imgBox">
                    <img src="../assets/Imagenes-comida/face.jpg" alt />
                  </div>
                  <div class="contenido-texto-card">
                    <h4>{{item.user.name}}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bannerText">
            <div>
              <h2>{{item.title}}</h2>
              <p>{{item.content}}</p>
              <div class="btn">
                <router-link to="/post">
                  <a target="blank_" alt="Ver más" @click="setPost(item)">Ver más</a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="bannerImg" id="slideshow">
            <img src="../assets/Imagenes-comida/food4.jpg" alt />
          </div>
        </div>
        <div class="content" v-else>
          <div class="bannerImg">
            <img src="../assets/Imagenes-comida/food6.jpg" alt />
          </div>
          <div class="bannerText">
            <div>
              <h2>{{item.title}}</h2>
              <p>{{item.content}}</p>
              <div class="btn">
                <router-link to="/post">
                  <a class="rainbow-button" target="blank_" alt="Ver más">Ver más</a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="bloguer">
            <div class="contenedor-bloguer">
              <div class="cards">
                <div class="card">
                  <div class="imgBox">
                    <img src="../assets/Imagenes-comida/face1.jpg" alt />
                  </div>
                  <div class="contenido-texto-card">
                    <h4>{{item.user.name}}</h4>
                  </div>
                </div>
              </div>
            </div>
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
import { mapState, mapMutations } from "vuex";

export default {
  name: "PostMeGeneral",
  data() {
    return {
      pagination: [],
      posts: []
    };
  },
  methods: {
    ver() {
      console.log(this.json);
    },
    async getPosts(url) {
      const datos = await fetch(
        `https://software-app-blog.herokuapp.com/${url}`
      ).then(res => res.json());
      this.posts = datos["posts"];
      this.pagination = datos["meta"];
    },
    ...mapMutations(["setPost"])
  },
  created() {
    this.getPosts("posts");
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
  --color-gen: #e762ff;
  --colores-gen: -webkit-linear-gradient(
    175deg,
    #00fff5,
    #bcff00,
    #ffee00,
    #ffc100,
    #ff59c1,
    #e762ff
  );
  --colores-cir-gen: -webkit-linear-gradient(
    60deg,
    #00fff5,
    #bcff00,
    #ffee00,
    #ffc100,
    #ff59c1,
    #e762ff
  );
  --gradiente-gen: linear-gradient(
      to right,
      hsla(0, 0%, 0%, 0.75),
      hsla(0, 0%, 0%, 0.75)
    ),
    url(../assets/Imagenes-comida/fondogen.jpg);
  --webkit-gradient-gen: -webkit-linear-gradient(
      to right,
      hsla(0, 0%, 2%, 0.75),
      hsla(0, 0%, 0%, 0.75)
    ),
    url(../assets/Imagenes-comida/fondogen.jpg);
}
/*---------------HEADER---------------*/
/* .waveuno {
  position: absolute;
  top: 0;
  width: 100%;
} */

.header-gen {
  width: 100%;
  height: 685px;
  background: var(--color-gen); /* fallback for old browsers*/
  background: var(--webkit-gradient-gen); /* Chrome 10-25, Safari 5.1-6*/
  background: var(
    --gradiente-gen
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  text-align: center;
}
.header-gen nav {
  text-align: right;
  padding: 30px 50px 0 0;
}
.header-gen nav > a {
  font-family: "Pacifico", cursive;
  font-size: 25px;
  text-decoration: none;
  margin-right: 12px;
}
.header-gen nav > a:hover {
  text-decoration: underline;
}
.header-gen nav a:nth-child(1) {
  color: #00feca;
}
.header-gen nav a:nth-child(2) {
  color: #bcff00;
}
.header-gen nav a:nth-child(3) {
  color: #ffc100;
}
.header-gen nav a:nth-child(4) {
  color: #ffee00;
}
.header-gen nav a:nth-child(5) {
  color: #ff59c1;
}
.wave-gen {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.header-gen .textos-header-gen {
  display: flex;
  height: 430px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.textos-header-gen h1 {
  background: var(--colores-gen);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 135px;
  font-family: "Rock Salt", cursive;
}
.textos-header-gen h2 {
  color: white;
  font-weight: 200;
  font-size: 25px;
}
.ver-cat {
  background: black;
  border-radius: 5px;
  padding: 5px;
}
.ver-cat a {
  background: var(--colores-gen);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  text-decoration: none;
}

/* CONTENIDO-BLOG */
.otro {
  padding: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
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
  min-height: 50vh;
}
.container:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 325px;
  height: 100%;
  background: var(--colores-cir-gen);
  border-radius: 100% 0% 0% 100%/50% 0% 0% 50%;
  transform: scaleY(-1);
  z-index: -2;
}

.container2 {
  position: relative;
  padding: 0 100px;
  min-height: 50vh;
}
.container2:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 325px;
  height: 100%;
  background: var(--colores-cir-gen);
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
  margin: 15px;
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
.content .bannerText .btn {
  position: absolute;
  left: 0px;
  width: 120px;
  height: 30px;
  display: flex;
  padding: 2px;
  justify-content: center;
  align-items: center;
  background: black;
  border-radius: 7px;
}
.content .bannerText a {
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  background: var(--colores-gen);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  font-size: 17px;
  text-decoration: none;
}
.content .bannerImg {
  position: relative;
  margin-right: 0px;
  width: 310px;
  height: 310px;
  border-radius: 50%;
}
.content .bannerImg img {
  position: absolute;
  top: 0;
  left: 0;
  border: 3px solid #333;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  opacity: 1;
}

.content .bloguer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Bloguers */
.container .bloguer,
.container2 .bloguer {
  position: relative;
  margin-top: 50px;
  width: 250px;
  height: 250px;
}
.bloguer .contenedor-bloguer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.contenedor-bloguer .cards {
  position: relative;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  min-height: 10vh;
}
.bloguer h4 {
  position: relative;
  color: var(--color-categoria);
}
.card {
  position: relative;
  width: 170px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 15px;
  background: #ffffff;
  transition: 0.5s;
}
.card:hover {
  height: 200px;
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
  background: var(--colores-gen);
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

/* comentarios */
/* .cards .comentarios {
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
} */
.botones {
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
.portafolio {
  margin-top: 45px;
  background: var(--color-categoria); /* fallback for old browsers*/
  background: var(--webkit-gradient-gen); /* Chrome 10-25, Safari 5.1-6*/
  background: var(
    --gradiente-gen
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
}
.portafolio h2 {
  text-align: center;
  background: var(--colores-gen);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 20px;
}
</style>