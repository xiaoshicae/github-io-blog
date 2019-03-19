<template>
  <div>Article Page {{ articleId }}</div>
</template>
<script>
export default {
  name: 'ArticlePage',
  data () {
    return {
      articleId: ''
    }
  },
  created () {
    this.articleId = this.$route.params.id
  }
}
</script>
