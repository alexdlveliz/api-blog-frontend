<template>
  <div>
    <header>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Nosotros</a>
        <a href="#">Menu</a>
        <a href="#">Iniciar sesion</a>
        <a href="#">Registrate</a>
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
      <div class="content" id="uno">
        <div class="bannerText">
          <div>
            <h2>Hamburguesas vegetarianas</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur iste aut quis provident, a perferendis
              sunt ullam dolores, quasi magnam quae accusantium neque eos! Magnam fuga vitae accusamus delectus sequi
              voluptatum voluptate voluptas. Repudiandae ullam quibusdam fuga non dicta ex asperiores. Deleniti exercitationem
              velit, dolore qui quasi totam natus. Aliquid, fugiat corrupti officiis eius nobis, aut, dolore pariatur ad est
              minima nihil cumque alias voluptatibus omnis neque dolorem tempore nesciunt.
              <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur iste aut quis provident, a perferendis
              sunt ullam dolores, quasi magnam quae accusantium neque eos! Magnam fuga vitae accusamus delectus sequi
              voluptatum voluptate voluptas. Repudiandae ullam quibusdam fuga non dicta ex asperiores. Deleniti exercitationem
              velit, dolore qui quasi totam natus. Aliquid, fugiat corrupti officiis eius nobis, aut, dolore pariatur ad est
              minima nihil cumque alias voluptatibus omnis neque dolorem tempore nesciunt.
            </p>
            <a href="#uno" class="abrir-coment">Comentarios</a>
          </div>
        </div>
        <div class="bannerImg" id="slideshow">
          <img src="../vista-post/img/food6.jpg" alt />
        </div>
      </div>
      <div class="bloguer">
        <div class="contenedor-bloguer">
          <div class="cards">
            <div class="card">
              <div class="imgBox">
                <img src="../vista-post/img/face2.jpg" alt />
              </div>
              <div class="contenido-texto-card">
                <h4>Alex de leon</h4>
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
    <div class="comentario-card" id="modal">
      <div class="flex" id="flex">
        <div class="contenido-modal">
          <div class="modal-header">
            <h2>Comentarios</h2>
          </div>
          <div class="modal-body">
            <div class="comentario-cont">
              <h3>Usuario</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta repellendus quo, eius
                repudiandae, autem vitae aut ipsam optio dignissimos, consequuntur provident dicta doloremque
                nam illo.
              </p>
            </div>
            <div class="comentario-cont">
              <h3>Usuario</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta repellendus quo, eius
                repudiandae, autem vitae aut ipsam optio dignissimos, consequuntur provident dicta doloremque
                nam illo.
              </p>
            </div>
            <div class="comentario-cont">
              <h3>Usuario</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta repellendus quo, eius
                repudiandae, autem vitae aut ipsam optio dignissimos, consequuntur provident dicta doloremque
                nam illo.
              </p>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
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
export default {};
</script>

<style >
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
    url(../vista-post/img/fondo2.jpg);
}
/*---------------HEADER---------------*/
.waveuno {
  position: absolute;
  top: 0;
  width: 100%;
}

header {
  width: 100%;
  height: 200px;
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
  padding: 10px 50px 0 0;
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
/* Contenedor post */
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

/* Hacer comentarios */
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
/* ver comentarios */
.flex {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comentario-card {
  width: 100%;
}
.contenido-modal {
  position: relative;
  background: #ffffff;
  border-radius: 25px;
  margin: 55px auto;
  width: 90%;
  box-shadow: 0 0 6px 0 rgba(248, 248, 248, 0.4);
}
.close {
  color: white;
  font-size: 30px;
  font-weight: bold;
}
.close:hover {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal-header,
.modal-footer {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background: var(--color-categoria);
}
.modal-header h2 {
  font-size: 20px;
}
.modal-body {
  position: relative;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
}
.modal-body .comentario-cont {
  position: relative;
  margin: 5px;
}
.comentario-cont h3 {
  text-align: left;
}
.comentario-cont p {
  text-align: justify;
  letter-spacing: 1px;
}

/* Footer */
.portafolio {
  margin-top: 0px;
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