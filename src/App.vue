<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/logout">Logout</router-link> |
      <router-link to="/posts/new">New Post</router-link>
    </div>
    <div class="container">
    	<router-view/>
    </div>
  </div>
</template>
