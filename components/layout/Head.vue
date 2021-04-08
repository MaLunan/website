<template>
  <el-header class="header">
    <!-- 背景图 -->
    <div class="cover_bg">
      <img :src="require(`@/assets/imgs/banner/${bgPic}`)" alt />
    </div>
    <!-- 头部导航 -->
    <el-row class="top_nav" type="flex" justify="space-between">
      <!-- 左侧图标 -->
      <el-col :span="10" class="logo">
        <nuxt-link to="/" class="logo_border">
          <img src="~/assets/imgs/header/logo.png" />
        </nuxt-link>
        <div class="company_name">
          <div>北京恒思创新自动化设备有限公司</div>
          <div>BEIJING C&I Automation Equipment Co., Ltd.（CIAE）</div>
        </div>
        <div class="company_tel">
          <img src="~/assets/imgs/header/tel.png" />
          <span>010-63531805</span>
        </div>
      </el-col>
      <!-- 右侧导航栏 -->
      <el-col :md="10">
        <navigation :lable="menu" :active="active"></navigation>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import navigation from "@/components/navigation";
export default {
  components: {
    navigation,
  },
  data() {
    return {
      menu: [
        "menu",
        {
          path: "/",
          name: "首页",
          enName: "Home",
        },
        {
          path: "/product",
          name: "产品展示",
          enName: "Product",
        },
        {
          path: "/project",
          name: "工程案例",
          enName: "Project",
        },
        {
          path: "/news",
          name: "新闻资讯",
          enName: "News",
        },
        {
          path: "/about",
          name: "关于我们",
          enName: "About",
        },
        {
          path: "/contact",
          name: "联系我们",
          enName: "Contact",
        },
      ],
      // 导航菜单当前激活(路由)
      active: "首页",
      // 背景图
      bgPic: "index.png",
    };
  },
  created: function () {
    this.setBgPic(this.$route.path);
  },
  watch: {
    $route: function () {
      this.setBgPic(this.$route.path);
    },
  },
  methods: {
    // 根据路由变化设置背景图
    setBgPic: function (path) {
      let pic = "";
      let active = "";
      if (path === "/") {
        pic = "index.png";
        active = "首页";
      } else if (path.split("/")[1] === "product" || path === "/param") {
        pic = "product.png";
        active = "产品展示";
      } else if (path.split("/")[1] === "project") {
        pic = "project.png";
        active = "工程案例";
      } else if (path.split("/")[1] === "news") {
        pic = "news.png";
        active = "新闻资讯";
      } else if (path.split("/")[1] === "about") {
        pic = "about.png";
        active = "关于我们";
      } else if (path.split("/")[1] === "contact") {
        pic = "contact.png";
        active = "联系我们";
      }
      this.active = active;
      this.bgPic = pic;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  padding: 0;
  width: 100%;
  height: 100vh !important;
  user-select: none;
}
// 背景图
.cover_bg {
  width: 100%;
  height: 100vh;
}
.top_nav {
  position: absolute;
  top: 30px;
  left: 44px;
  z-index: 999;
  width: calc(100% - 44px);
  height: 44px;
  // 左侧 logo 图
  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logo_border {
      padding-right: 10px;
      border-right: 2px solid #fff;
      margin-right: 10px;
    }
    .company_name {
      width: 291px;
      font-size: 18px;
      height: 40px;
      color: #fff;
      div {
        line-height: 15px;
      }
      > div:nth-of-type(2) {
        font-size: 12px;
        margin-top: 5px;
      }
    }
    .company_tel {
      width: 153px;
      height: 22px;
      margin-left: 20px;
      margin-bottom: 15px;
      > img {
        width: 22px;
        vertical-align: middle;
      }
      > span {
        display: inline-block;
        color: #fff;
        vertical-align: middle;
      }
    }
  }
}
</style>