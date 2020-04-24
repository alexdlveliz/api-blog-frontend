<template>
  <div id="comida">
    <div class="header-cat">
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/about">Nosotros</router-link>
        <router-link to="/login">Iniciar Sesión</router-link>
        <router-link to="/general">Posts</router-link>
        <router-link to="/create">Publicar</router-link>
      </nav>
      <section class="textos-header-cat">
        <h1>{{this.categories[this.idCategory-1].name_category}}</h1>
      </section>
      <div class="wave-cat" style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path
            d="M-5.42,86.94 C279.00,142.20 383.97,-97.59 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: rgb(255, 255, 255);"
          />
        </svg>
      </div>
    </div>
    <div v-for="(item, index) of posts" v-bind:key="index">
      <div :class="[index%2==0 ? 'container-cat':'container2-cat']">
        <div class="otro-cat">
          <h1></h1>
        </div>
        <div class="content-cat" v-if="index%2==0">
          <div class="bloguer-cat">
            <div class="contenedor-bloguer-cat">
              <div class="cards-cat">
                <div class="card-cat">
                  <div class="imgBox-cat">
                    <img src="@/assets/Imagenes-comida/face2.jpg" alt />
                  </div>
                  <div class="contenido-texto-card-cat">
                    <h4>{{item.user.name}}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bannerText-cat">
            <div>
              <h2>{{item.title}}</h2>
              <p>{{item.content}}</p>
              <router-link to="/post">
                <a class="rainbow-button" target="blank_" alt="Ver más" @click="setPost(item)"></a>
              </router-link>
            </div>
          </div>
          <div class="bannerImg-cat">
            <img class="active" src="@/assets/Imagenes-comida/food6.jpg" alt />
          </div>
        </div>
        <div class="content-cat" v-else>
          <div class="bannerImg-cat">
            <img src="@/assets/Imagenes-comida/food6.jpg" alt />
          </div>
          <div class="bannerText-cat">
            <div>
              <h2>{{item.title}}</h2>
              <p>{{item.content}}</p>
              <router-link to="/post">
                <a class="rainbow-button" target="blank_" alt="Ver más"></a>
              </router-link>
            </div>
          </div>
          <div class="bloguer-cat">
            <div class="contenedor-bloguer-cat">
              <div class="cards-cat">
                <div class="card-cat">
                  <div class="imgBox-cat">
                    <img src="@/assets/Imagenes-comida/face2.jpg" alt />
                  </div>
                  <div class="contenido-texto-card-cat">
                    <h4>{{item.user.name}}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paginacion">
      <p>¿No encontraste lo que buscabas? sigue explorando</p>
      <button
        :disabled="pagination.prev_page!=null ? false:true"
        @click="getPostsCategory(pagination.prev_page)"
      >Anterior</button>
      <button
        :disabled="pagination.next_page!=null ? false:true"
        @click="getPostsCategory(pagination.next_page)"
      >Siguiente</button>
    </div>
    <section class="portafolio-cat">
      <div style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path
            d="M0.00,49.99 C128.89,193.51 249.66,-66.01 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
            style="stroke: none; fill: #ffffff;"
          />
        </svg>
      </div>
      <h2 class="titulo-cat">NT</h2>
    </section>
  </div>
</template>

<script>
import api from "@/api";
import { mapState, mapMutations } from "vuex";

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
    ...mapMutations(["setPost"])
  },
  computed: {
    ...mapState(["idCategory", "categories"])
  },
  created() {
    //api.getPostsComida(1).then(posts => (this.posts = posts));
    this.getPostsCategory("posts/category?page=1&id=" + this.idCategory);
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
  --gradiente-cat: linear-gradient(
      to right,
      hsla(0, 0%, 0%, 0.35),
      hsla(0, 0%, 0%, 0.35)
    ),
    url(../assets/Imagenes-comida/fondo.jpg);
  --webkit-gradient-cat: -webkit-linear-gradient(
      to right,
      hsla(0, 0%, 0%, 0.35),
      hsla(0, 0%, 0%, 0.35)
    ),
    url(../assets/Imagenes-comida/fondo.jpg);
  --gardiente-col: -webkit-linear-gradient(
    175deg,
    #bcff00,
    #ffee00,
    #ffc100,
    #bcff00
  );
}
/*---------------HEADER---------------*/
/* .waveuno {
  position: absolute;
  top: 0;
  width: 100%;
} */

.header-cat {
  width: 100%;
  height: 685px;
  background: var(--color-categoria); /* fallback for old browsers*/
  background: var(--webkit-gradient-cat); /* Chrome 10-25, Safari 5.1-6*/
  background: var(
    --gradiente-cat
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  text-align: center;
}
.header-cat nav {
  text-align: right;
  padding: 30px 50px 0 0;
}
.header-cat nav > a {
  color: var(--color-categoria);
  font-family: "Pacifico", cursive;
  font-size: 25px;
  text-decoration: none;
  margin-right: 12px;
}
.header-cat nav > a:hover {
  text-decoration: underline;
}
.wave-cat {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.header-cat .textos-header-cat {
  display: flex;
  height: 430px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.textos-header-cat h1 {
  color: var(--color-categoria);
  font-size: 115px;
  font-family: "Rock Salt", cursive;
}
.textos-header-cat h2 {
  color: white;
  font-weight: 200;
  font-size: 45px;
  font-family: "Roboto Mono", monospace;
}

/* CONTENIDO-BLOG */
.otro-cat {
  padding: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.otro-cat h1 {
  color: var(--color-categoria);
  text-align: center;
  font-size: 60px;
  letter-spacing: 2px;
}
.container-cat {
  position: relative;
  padding: 0 100px;
  min-height: 50vh;
}
.container-cat:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 325px;
  height: 100%;
  background: var(--color-categoria);
  border-radius: 100% 0% 0% 100%/50% 0% 0% 50%;
  transform: scaleY(-1);
  z-index: -2;
}

.container2-cat {
  position: relative;
  padding: 0 100px;
  min-height: 50vh;
}
.container2-cat:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 325px;
  height: 100%;
  background: var(--color-categoria);
  border-radius: 0% 100% 100% 0%/0% 50% 50% 0%;
  transform: scaleY(-1);
  z-index: -2;
}

.content-cat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.content-cat .bannerText-cat {
  position: relative;
  max-width: 800px;
  margin: 15px;
}
.content-cat .bannerText-cat h2 {
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.2em;
  margin: 10px;
  color: #333;
}
.content-cat .bannerText-cat p {
  font-size: 18px;
  color: #333;
  line-height: 1.8em;
  margin: 0;
  text-align: justify;
}
/*  a {
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  color: #333;
  letter-spacing: 1px;
  font-size: 10px;
  text-decoration: none;
  padding: 15px;
  margin: 7px;
  background: var(--color-categoria);
  border-radius: 5px;
} */
.content-cat .bannerText-cat a {
  text-decoration: none;
  color: black;
}
.rainbow-button {
  width: calc(102px + 4px);
  height: calc(40px + 4px);
  background-image: var(--gardiente-col);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 14px;
}
.rainbow-button:after {
  content: attr(alt);
  width: 100px;
  height: 35px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rainbow-button:hover {
  animation: slidebg 2s linear infinite;
}
@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}

.content-cat .bannerImg-cat {
  position: relative;
  margin-right: 0px;
  width: 310px;
  height: 310px;
  border-radius: 50%;
}
.content-cat .bannerImg-cat img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  opacity: 1;
}
.content-cat .bloguer-cat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Bloguers */
.container-cat .bloguer-cat,
.container2-cat .bloguer-cat {
  position: relative;
  margin-top: 50px;
  width: 250px;
  height: 250px;
}
.bloguer-cat .contenedor-bloguer-cat {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.bloguer-cat h4 {
  position: relative;
  color: var(--color-categoria);
}
.contenedor-bloguer-cat .cards-cat {
  position: relative;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  min-height: 10vh;
}
.card-cat {
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
.card-cat:hover {
  height: 200px;
}
.card-cat .imgBox-cat {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.card-cat .imgBox-cat img {
  max-width: 100%;
  opacity: 1;
  transition: 0.5s;
}
.card-cat:hover .imgBox-cat img {
  opacity: 1;
}
.card-cat:before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: var(--color-categoria);
  z-index: -1;
}
.card-cat:after {
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
.card-cat:before,
.card-cat:after {
  background: var(--gardiente-col);
}
.card-cat .contenido-texto-card-cat {
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
.card-cat:hover .contenido-texto-card-cat {
  opacity: 1;
}
.card-cat .contenido-texto-card-cat h4 {
  font-size: 17px;
  color: black;
  font-family: "Pacifico", cursive;
  line-height: 20px;
  letter-spacing: 2px;
}
/* Hacer comentarios */
/* .cards-cat .comentarios-cat{
    position: relative;
    width: 600px;
    height: 250px;
    display: flex;
    flex-direction: column;
}
.comentarios h1{
    position: relative;
    color: black;
    font-size: 25px;
    margin: 5px;
}
.comentarios input{
    position: relative;
    text-align: justify;
    width: 98%;
    height: 100%;
    margin: 5px;
    padding: 5px;
    border: 1px solid var(--color-categoria);
}
.comentarios a{
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
/* ver comentarios */
/* .flex{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.comentario-card{
    display: none;
    position: fixed;
    z-index: 1;
    overflow: auto;
    left: 0;
    top: 0px;
    width: 100%;
    background: rgba(245, 241, 3, 0.24);
}
.contenido-modal{
    position: relative;
    background: #ffffff;
    border-radius: 25px;
    margin: 150px auto;
    width: 50%;
    box-shadow: 0 0 6px 0 rgba(248, 248, 248, 0.4);
    animation-name: modal;
    animation-duration: 1s;
}
@keyframes modal{
    from{top: -330px; opacity: 0;}
    to{top:0px; opacity: 1;}
}
.close{
    color: white;
    font-size: 30px;
    font-weight: bold;
}
.close:hover{
    color: black;
    text-decoration: none;
    cursor: pointer;
}
.modal-header, .modal-footer{
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    background: var(--color-categoria);
}
.modal-body{
    position: relative;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
}
.modal-body .comentario-cont{
    position: relative;
    margin: 5px;
}
.comentario-cont h3{
    text-align: left;
}
.comentario-cont p{
    text-align: justify;
    letter-spacing: 1px;
} */

/* Botones de paginacion */
.paginacion {
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.paginacion button {
  text-decoration: none;
  color: #333;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px;
  margin: 8px;
  border-radius: 7px;
  box-shadow: none;
  background: var(--color-categoria);
}
.paginacion button:hover {
  cursor: pointer;
}
.portafolio-cat {
  margin-top: 45px;
  background: var(--color-categoria); /* fallback for old browsers*/
  background: var(--webkit-gradient-cat); /* Chrome 10-25, Safari 5.1-6*/
  background: var(
    --gradiente-cat
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
}
.portafolio-cat h2 {
  text-align: center;
  color: var(--color-categoria);
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 20px;
}
/* CATEGORIAS */
/*---------------Galeria-Categorías---------------*/
/* .contenedor-categorias {
  margin: 0;
  padding: 0;
}
.titulo-cat {
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
} */

/* Intento  */
</style>