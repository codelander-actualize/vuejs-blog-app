<template>
  <div class="posts-show">
    <h1>{{ post.title }}</h1>
    <img :src="post.image" :alt="post.title">
    <p>{{ post.body }}</p>



    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Edit
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Post</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="submit()">
              <h1>New Post</h1>
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="form-group">
                <label>Title:</label>
                <input type="text" class="form-control" v-model="post.title">
              </div>
              <div class="form-group">
                <label>Body:</label><br>
                <textarea class="form-control" rows="6" cols="50" v-model="post.body"></textarea>
                <div class="form-group">
                <label>Image Url:</label>
                <input type="text" class="form-control" v-model="post.image">
              </div>
              </div>
              <input type="submit" class="btn btn-primary" value="Submit">
            </form>
          </div>
        </div>
      </div>
    </div>

    <br>
    <router-link to="/">Back to all posts</router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      post: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/posts/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.post = response.data;
    })
  },
  methods: {
    submit: function() {
      var params = {
        title: this.post.title,
        body: this.post.body,
        image: this.post.image
      };
      axios
        .patch("/api/posts/" + this.post.id, params)
        .then(response => {
          console.log(response.data);
          $('#exampleModal').modal('hide');
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>