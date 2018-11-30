<template>
  <div>
    <router-link to="/posts/add" class="btn btn-primary">Dodaj</router-link>
    <table class="table table-hover">
      <tr>
        <th>ID</th>
        <th>Tytuł</th>
        <th>Zawartość</th>
        <th>Autor</th>
        <th>Kategoria</th>
        <th>Edytuj</th>
        <th>Usuń</th>
      </tr>
      <tr v-for="post in posts">
        <td>{{post.id}}</td>
        <td>{{post.title}}</td>
        <td>{{post.body | truncate(255 , '...') }}</td>
        <td>{{post.author}}</td>
        <td>{{post.category_name}}</td>
        <td><router-link v-bind:to="'/posts/'+post.id+'/edit'" class="btn btn-success">Edytuj</router-link></td>
        <td><button @click="deletePost(post.id)" class="btn btn-danger">Usuń</button></td>


      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    methods: {
      fetchPosts() {
        this.$http.get('http://localhost/Rest_API/api/post/read.php')
          .then(respone => respone.json())
          .then(result => this.posts = result)

      },
      deletePost(id){
        this.$http.delete('http://localhost/Rest_API/api/post/delete.php?id='+id)
          .then(() => {
          this.fetchPosts();
        });
      }
    },
    created: function () {
      this.fetchPosts();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
