const appRegistrar = new Vue({
  el: "#registrar",
  data() {
    return {
      nombre: "",
      correo: "",
      usuario: "",
      rol: 0,
      password: "",
    };
  },
  methods: {
    registrarUsuario: function () {
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
});

const appLogin = new Vue({
  el: "#inicio-sesion",
});
