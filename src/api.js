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

export default {
  getPosts,
  getPostsComida,
};
