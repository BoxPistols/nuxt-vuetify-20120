<template>
  <div>
    <h1>記事一覧</h1>
    <ul>
      <li v-for="post in posts" :key=post.id>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        posts: []
      }
    },
    mounted() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.posts = response.data);
    },
  }
</script>
