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
      var raw = `{\n	"email": "${this.correo}",\n	"name": "${
        this.nombre
      }",\n	"password": "${this.password}",\n	"username": "${
        this.usuario
      }",\n	"role": ${parseInt(this.rol)}\n}`;
      var requestOptions = {
        method: "POST",
        mode: "no-cors",
        body: raw,
      };
      fetch("https://software-app-blog.herokuapp.com/users", requestOptions)
        .then((response) => console.log("Response", response))
        .then((result) => console.log("Resultado:", result))
        .catch((error) => console.log("ha habido un error", error));
    },
  },
});

const appLogin = new Vue({
  el: "#inicio-sesion",
});
