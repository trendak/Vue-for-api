<template>
  <div class="form">

    <div class="form-group">
      <label for="title"> Nazwa Posta</label>
      <input v-model="post.title" class="form-control" type="text" id="title" name="title">

    </div>
    <div class="form-group">
      <label for="body"> Zawartość</label>
      <input v-model="post.body" class="form-control" type="text" id="body" name="body">

    </div>
    <div class="form-group">
      <label for="author"> Autor</label>
      <input v-model="post.author" class="form-control" type="text" id="author" name="author">

    </div>
    <div class="form-group">
      <label for="category_id">Kategoria</label>
      <select v-model="post.category_id" class="form-control" id="category_id" name="category_id">
        <option v-for="category in categories" :value="category.id"> {{category.name}} </option>

      </select>

    </div>
    <div class="form-grup">
      <button v-on:click="savePost" class="btn btn-primay" >Zapisz</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: '',
          author: '',
          category_id: ''
        },
        categories: []

      }

    },
    methods: {
      fetchCategories() {
        this.$http.get('http://localhost/Rest_API/api/category/read.php')
          .then(respone => respone.json())
          .then(result => this.categories = result)

      },
      savePost() {
        this.$http.post('http://localhost/Rest_API/api/post/create.php', this.post)
          .then(() => {
            this.$router.push({path: '/posts'});
          });


      }

    },
    created: function () {
      this.fetchCategories();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
