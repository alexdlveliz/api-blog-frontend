<template>
  <div class="login">
    <!--ENCABEZADO-WAVE-NAV-->
    <header>
      <nav>
        <router-link to="/">Inicio</router-link>
        <!-- <a href="#">Inicio</a>
        <a href="#">Ayuda</a>-->
      </nav>
      <div class="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#8811fe"
            fill-opacity="1"
            d="M0,96L17.1,122.7C34.3,149,69,203,103,224C137.1,245,171,235,206,202.7C240,171,274,117,309,117.3C342.9,117,377,171,411,165.3C445.7,160,480,96,514,64C548.6,32,583,32,617,74.7C651.4,117,686,203,720,208C754.3,213,789,139,823,101.3C857.1,64,891,64,926,69.3C960,75,994,85,1029,117.3C1062.9,149,1097,203,1131,224C1165.7,245,1200,235,1234,208C1268.6,181,1303,139,1337,128C1371.4,117,1406,139,1423,149.3L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
          />
        </svg>
      </div>
    </header>
    <!--ENCABEZADO-WAVE-NAV-->
    <!--CONTENEDOR GENERAL-->
    <div class="general">
      <!--CONTENEDOR DE IMAGEN-->
      <div class="imgbx">
        <img src="@/assets/Imagenes-login/login2.svg" alt />
      </div>
      <!--CONTENEDOR DE IMAGEN-->
      <!--CONTENEDOR DE LOGIN-->
      <div class="container" id="container">
        <!-- Formulario de registro -->
        <div class="form-container sign-up-container" id="registrar">
          <div class="form">
            <h1>Regístrate</h1>
            <span>llena la siguiente información</span>
            <input type="text" placeholder="Nombre" v-model="data.nombre" />
            <input type="email" placeholder="Correo" v-model="data.correo" />
            <input type="text" placeholder="Usuario" v-model="data.usuario" />
            <div class="rol">
              <p>Rol</p>
              <label>
                <input type="radio" name="like" value="0" v-model="data.rol" />
                <span class="invitado">Invitado</span>
              </label>
              <label>
                <input type="radio" name="like" value="1" v-model="data.rol" />
                <span class="escritor">Escritor</span>
              </label>
            </div>
            <input
              type="password"
              placeholder="Contraseña"
              v-model="data.password"
            />
            <button @click="registrarUsuario">Regístrate</button>
          </div>
        </div>
        <!-- Formulario de inicio de sesión -->
        <div class="form-container sign-in-container" id="inicio-sesion">
          <div class="form">
            <h1>Iniciar Sesión</h1>
            <div class="user-svg">
              <img src="@/assets/Imagenes-login/user.svg" alt />
            </div>
            <span>Ingresa con tu cuenta</span>
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button>Iniciar sesión</button>
          </div>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>¡Bienvenido!</h1>
              <p>Inicia sesión para compartir todas tus ideas</p>
              <button class="ghost" id="signIn">Iniciar sesión</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Esto es post-me!</h1>
              <p>
                Registrate y comienza a compartir y crear cosas junto a nosotros
              </p>
              <button class="ghost" id="signUp">Registrate</button>
            </div>
          </div>
        </div>
      </div>
      <!--CONTENEDOR DE LOGIN-->
    </div>
    <!--CONTENEDOR GENERAL-->
    <!--SCRIPT PARA EFECTO SLIDE-->
    <!-- <script src="@/assets/scripts-login/slide.js"></script> -->
    <!--SCRIPT PARA EFECTO SLIDE-->
    <!--FOOTER-->
    <footer class="marca">
      <h2>&copy; NT Design | Post-Me</h2>
    </footer>
    <!--FOOTER-->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "PostMeLogin",
  mounted() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  },
  data() {
    return {
      data: {
        nombre: "",
        usuario: "",
        correo: "",
        password: "",
        rol: 0,
      },
    };
  },
  computed: {},
  methods: {
    registrarUsuario() {
      /* Creación de los parámetros a enviar */
      var raw = `{\n	"email": "${this.data.correo}",\n	"name": "${
        this.data.nombre
      }",\n	"password": "${this.data.password}",\n	"username": "${
        this.data.usuario
      }",\n	"role": ${parseInt(this.data.rol)}\n}`;
      console.log(raw),
        /* Llamada a la API */
        fetch("https://software-app-blog.herokuapp.com/users", {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: raw,
        })
          .then((response) => console.log("Respuesta", response))
          .then((result) => console.log("Resultado:", result))
          .catch((error) => console.log("ha habido un error", error));
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
  box-sizing: border-box;
}
body {
  background: #f6f5f7;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  width: 100vw;
  margin: 0;
}
/*--------BARRA NAV-------*/
nav {
  text-align: right;
  background: #8811fe;
  padding-top: 25px;
  padding-right: 25px;
}
nav > a {
  color: floralwhite;
  font-family: "Pacifico", cursive;
  font-size: 18px;
  text-decoration: none;
  margin-right: 12px;
}
nav > a:hover {
  text-decoration: underline;
}
.wave {
  position: fixed;
  width: 100%;
}
/*-------CONTENEDOR GENERAL-------*/
.general {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 70px;
}
/*-------IMAGEN--------*/
.imgbx {
  position: relative;
  width: 550px;
  height: 550px;
}
.imgbx img {
  width: 100%;
  height: 100%;
}
/*-------ESTILO-TEXTOS-------*/
h1 {
  font-weight: bold;
  margin: 0;
}
h2 {
  text-align: center;
}
p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}
span {
  font-size: 12px;
}
a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}
/*-------BOTONES-------*/
button {
  border-radius: 20px;
  border: 1px solid #8811fe;
  background-color: #8811fe;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
button:active {
  transform: scale(0.95);
}
button:focus {
  outline: none;
}
button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}
/*--------CONTENEDOR-LOGIN--------*/
.form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}
input {
  background-color: white;
  border-radius: 15px;
  border: 1px solid #cd9cfe;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}
.rol {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 5px;
  margin: 8px 8px;
  width: 100%;
  background: #ffffff;
  text-align: center;
  border: 1px solid #cd9cfe;
  border-radius: 15px;
}
.rol:before {
  content: "";
  transform: skew(-3deg);
  pointer-events: none;
}
.rol p {
  margin: 0;
  padding: 0;
  color: black;
}
.rol label {
  position: relative;
  cursor: pointer;
}
.rol label input {
  display: none;
}
.rol label span {
  position: relative;
  display: block;
  margin: 5px;
  padding: 5px;
  width: 100px;
  background: white;
  border: 1px solid #cd9cfe;
  color: #cd9cfe;
  border-radius: 15px;
}
.rol label input:checked ~ span {
  color: white;
  background: #cd9cfe;
  border: 1px solid #8811fe;
}
.rol label input:checked ~ span:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #8811fe;
  z-index: -1;
  filter: blur(15px);
}
.rol label input:checked ~ span:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #8811fe;
  z-index: -1;
  filter: blur(25px);
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}
/*--------CONTENEDOR DE INICIO DE SESION--------*/
.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
  color: #8811fe;
}
.sign-in-container img {
  position: relative;
  width: 55px;
  height: 55px;
  margin-top: 10px;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}
/*--------CONTENEDOR DE REGISTRO--------*/
.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  color: #8811fe;
}
.sign-up-container .social-container a i {
  color: #8811fe;
}

/*--------ESTILOS Y EFECTOS DE CONTENEDORES--------*/
.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}
@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}
.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}
.overlay {
  background: linear-gradient(to right, #af60fe, #8811fe, #8811fe, #af60fe);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}
.container.right-panel-active .overlay {
  transform: translateX(50%);
}
.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}
.overlay-left {
  transform: translateX(-20%);
}
.container.right-panel-active .overlay-left {
  transform: translateX(0);
}
.overlay-right {
  right: 0;
  transform: translateX(0);
}
.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}
.social-container {
  margin: 20px 0;
}
.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
/*-------FOOTER-------*/
.marca {
  margin: 0;
  padding: 0;
  align-items: center;
}
.marca h2 {
  text-align: center;
  color: #7f00ff;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 20px;
}
</style>
