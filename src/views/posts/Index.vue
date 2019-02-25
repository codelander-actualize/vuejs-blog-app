<template>
  <div class="posts-index">
    <div v-for="post in posts">
      <router-link v-bind:to="'/posts/' + post.id">
        <h3>{{ post.title }}</h3>
      </router-link>
      <img :src="post.image" :alt="post.title">
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      posts: []
    };
  },
  created: function() {
    axios.get("/api/posts").then(response => {
      console.log(response.data);
      this.posts = response.data;
    })
  },
  methods: {}
};
</script>