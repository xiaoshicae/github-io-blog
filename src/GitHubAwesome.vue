<template>
  <div class="container">
    <div class="tip">
      <p class="tip-item">
        说明: 鉴于awesome库所列的第三方库无星数标记, 查找起来不是很方便,
        因此决定上星数标记, 以便查阅。
      </p>

      <p class="tip-item">
        本站采用前后端分离模式, 前端代码部署在GithubPages上, 后端部署在阿里云上,
        顺便给自己打个广告。
        <a
          href="https://github.com/xiaoshicae"
          target="_blank"
          style="color: #03A9F4"
          >传送门</a
        >
      </p>
    </div>

    <div class="awesome-container">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane
          v-for="item of awesomeInfoList"
          :key="item.repo"
          :label="item.repo.split('/')[1]"
          :name="item.repo"
          style="padding: 0"
        >
          <div class="github-url-item">
            <a
              :href="`https://github.com/${item.repo}`"
              target="_blank"
              style="color: #03A9F4; text-decoration:none"
            >
              <span style="color: #0a0a0a;">
                原站地址:
              </span>
              {{ item.repo }}
            </a>
          </div>

          <mavon-editor
            :value="item.content"
            defaultOpen="preview"
            :subfield="false"
            :editable="false"
            :toolbarsFlag="false"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";


const awesomeList = [
  "sindresorhus/awesome",
  "avelino/awesome-go",
  "vinta/awesome-python",
  "akullpp/awesome-java",
  "vuejs/awesome-vue",
  "enaqx/awesome-react",
  "justjavac/awesome-wechat-weapp"
];

function orderFunc (a, b) {
  return awesomeList.indexOf(a) - awesomeList.indexOf(b);
}


export default {
  name: "GitHubAwesome",
  data () {
    return {
      activeName: "",
      awesomeInfo: {},
    };
  },
  methods: {
    getAwesomeContent (awsome) {
      const awsomes = awsome.split('/')
      const user = awsomes[0]
      const repo = awsomes[1]
      const url = `/awsome_readme/${user}_${repo}_README.md`

      axios
        .get(url)
        .then(resp => {
          window.console.log(resp);
          const data = resp.data;
          this.$set(this.awesomeInfo, awsome, data)
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  },
  computed: {
    awesomeInfoList: function () {
      const keys = Object.keys(this.awesomeInfo)
      keys.sort(orderFunc)
      return keys.map(key => { return { repo: key, content: this.awesomeInfo[key] } })
    }
  },
  created () {
    awesomeList.forEach(awesome => {
      this.getAwesomeContent(awesome)
    })
  }
};
</script>

<style>
.container {
  padding: 15px;
}

.tip {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-weight: 350;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  padding: 2px 16px;
  background-color: #ecf8ff;
  border-radius: 4px;
  border-left: 5px solid #50bfff;
}

.tip-item {
  text-align: left;
}

.awesome-container {
  margin-top: 15px;
}

.github-url-item {
  text-align: left;
  margin-bottom: 15px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-weight: 350;
  margin: 15px;
}

.el-tabs--border-card > .el-tabs__content {
  padding: 0px;
}
</style>
