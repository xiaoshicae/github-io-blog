import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index.vue'
import ArticlePage from './pages/ArticlePage.vue'
import ArticleList from './pages/ArticleList.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'indexPage',
            component: Index,
            children: [

            ]
        },
        {
            path: '/article/detail/:id',
            name: 'articlePage',
            component: ArticlePage,
            children: [

            ]
        },
        {
            path: '/article/list',
            name: 'articleList',
            component: ArticleList,
            children: [

            ]
        }
    ]

})