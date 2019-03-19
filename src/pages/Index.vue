<template>
  <div class="index-container">
    <TopNav :menu-list="menuList"></TopNav>
    <div class="article-list">
      <ArticleItem
        :key="article.id"
        :article="article"
        v-for="article in articleList"
      ></ArticleItem>
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
import ArticleItem from '../components/ArticleItem.vue'

export default {
  name: 'Index',
  components: {
    TopNav,
    ArticleItem
  },
  data () {
    return {
      menuList: [
        {
          'id': 1,
          'path': '/',
          'txt': '文章',
          'type': 'innerLink'
        },
        {
          'id': 2,
          'path': '/article/list',
          'txt': '分类',
          'type': 'innerLink'
        },
        {
          'id': 3,
          'path': 'https://github.com/',
          'txt': 'GitHub',
          'type': 'outerLink'
        }
      ],
      articleList: [
        {
          id: 1,
          imgSrc: '',
          title: '文章标题',
          desc: '文章描述',
          tagList: [
            { id: 1, txt: '标签1' },
            { id: 2, txt: '标签2' },
          ],
          author: '作者',
          publishTime: '发布时间',
          viewNumber: '阅读数'
        },
        {
          id: 2,
          imgSrc: '',
          title: '文章标题2',
          desc: '文章描述2',
          tagList: [
            { id: 3, txt: '标签3' },
            { id: 4, txt: '标签4' },
          ],
          author: 'zhuangshui',
          publishTime: '09年5月',
          viewNumber: '500'
        }
      ]
    }
  },
  created () {
  }
}
</script>

<style scoped>
.index-container {
  width: 100%;
  height: 100%;
}
</style>
