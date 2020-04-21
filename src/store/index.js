import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datosLogin: {
      nombre: "",
      correo: "",
      usuario: "",
      password: "",
      rol: 0,
    },
  },
  mutations: {
    registrarUsuario() {
      /* Creación de los parámetros a enviar */
      var raw = `{\n	"email": "${this.correo}",\n	"name": "${
        this.nombre
      }",\n	"password": "${this.password}",\n	"username": "${
        this.usuario
      }",\n	"role": ${parseInt(this.rol)}\n}`;
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
  actions: {},
  modules: {},
});
