import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import AddPost from '@/components/AddPost'
import EditPost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/add',
      name: 'postAdd',
      component: AddPost
    },
    {
      path: '/posts/:id/edit',
      name: 'postEdit',
      component: EditPost
    }
  ]
})
