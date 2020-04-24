const url = "https://software-app-blog.herokuapp.com";

//Accediendo al endpoint /posts con get
async function getPosts() {
  return await fetch(`${url}/posts`)
    .then((res) => res.json())
    .then((res) => res.posts);
}

async function getPostsComida(page) {
  return await fetch(`${url}/posts/category?page=${page}&id=1`)
    .then((res) => res.json())
    .then((res) => res.posts);
}

async function publishComment(comment, user_id, post_id) {
  var raw = `{\n	"content": "${comment}",\n	"user_id": ${user_id},\n	"post_id": ${post_id}\n}`;

  var requestOptions = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    body: raw,
    redirect: "follow",
  };
  fetch(`${url}/comments`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export default {
  getPosts,
  getPostsComida,
  publishComment
};
