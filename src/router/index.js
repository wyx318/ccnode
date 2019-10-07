import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line no-unused-vars
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
Vue.use(Router)

export default new Router({
  routes: [{
    name: 'root',
    path: '/',
    components: {
      main: PostList

    }
  },
  {
    name: 'post_content',
    // 接受参数 从 PostList组件中 router-link 下  params 参数 传递过来
    path: '/topic/:id&author=:name',
    components: {
      main: Article,
      slidebar: SlideBar
    }
  },
  {
    name: 'user_info',
    path: '/userinfo/:name',
    components: {
      main: UserInfo
    }
  }
  ],
  proxyTable: {

  }
})
