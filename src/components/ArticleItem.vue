<template>
  <div class="article-item">
    <div class="left-img">
      <img class="article-img" :src="article.imgSrc" alt="封面图" />
    </div>
    <div class="right-content">
      <div class="article-title">
        <a @click="gotoArticleDetail(article.id)" class="title-link">
          {{ article.title }}
        </a>
      </div>
      <div class="article-desc">
        <span>
          {{ article.desc }}
        </span>
      </div>
      <div class="article-tags">
        <el-tag
          type="info"
          size="small"
          class="tag-item"
          :key="tag.id"
          v-for="tag in article.tagList"
        >
          <i class="iconfont icon-tag"></i>
          {{ tag.txt }}
        </el-tag>
      </div>
      <div class="atricle-item-bottom">
        <div class="article-extra">
          <span class="extra-item author">
            <i class="iconfont icon-people"></i>
            {{ article.author }},
          </span>
          <span class="extra-item publish-time">
            <i class="iconfont icon-clock"></i>
            {{ article.publishTime }},
          </span>
          <span class="extra-item view-num">
            <i class="iconfont icon-eye"></i>
            {{ article.viewNumber }}
          </span>
        </div>
        <div class="read-link">
          <span>
            <a @click="gotoArticleDetail(article.id)">
              Read More
              <i class="el-icon-arrow-right"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleItem",
  props: {
    article: {
      type: Object,
      default: function () {
        return {
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
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    gotoArticleDetail (articleId) {
      this.$router.push({ path: `/article/detail/${articleId}` })
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
  text-decoration: none;
}
.article-item {
  width: 900px;
  margin: 30px auto;
  padding: 20px 0;
  border-bottom: gray 1px solid;
  display: flex;
  flex-wrap: nowrap;
}

.left-img {
  width: 260px;
}

.article-img {
  border-radius: 5px;
  width: 260px;
}

.right-content {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.article-title {
  color: #34495e;
  font-size: 1.28571429em;
  display: inline-block;
  font-weight: 400;
  text-align: left;
  font-weight: bolder;
  font-size: 1.2em;
}

.title-link:hover {
  color: #18bc9c;
}

.article-desc {
  margin-top: 10px;
  text-align: left;
  font-size: 1.2em;
  line-height: 1em;
  color: #7f8c8d;
}

.article-tags {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 20px;
}

.tag-item {
  margin-right: 10px;
}

.atricle-item-bottom {
  display: flex;
  justify-content: space-between;
}
.article-extra {
  display: flex;
  margin-top: 10px;
  font-size: 0.8em;
  opacity: 0.8;
}

.extra-item {
  margin-right: 8px;
}

.read-link {
  display: inline-block;
  color: #18bc9c;
  padding-right: 10px;
  font-weight: bold;
}
</style>
