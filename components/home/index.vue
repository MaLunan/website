<template>
  <div class="wrap">
    <div class="main_title">
      <h3>
        <span>{{content.title}}</span>
      </h3>
      <p>{{content.text}}</p>
    </div>
    <!-- 产品设计案例 -->
    <ul v-if="content.tag === 'product'" class="product">
      <li :class="item.tag" v-for="item,index in product" :key="index">
        <img :src="require(`@/assets/imgs/home/${item.url}`)" alt />
      </li>
    </ul>
    <!-- 工程案例 -->
    <ul v-if="content.tag === 'project'" class="project">
      <li v-for="item,index in project" :key="index">
        <img :src="require(`@/assets/imgs/home/${item}`)" alt />
      </li>
    </ul>
    <!-- 热点新闻资讯 -->
    <ul v-if="content.tag === 'news'" class="news">
      <li>
        <h1>公司动态</h1>
        <h1>NEWS</h1>
        <h3 @click="toNews(1)">LOOK MORE</h3>
      </li>
      <li>
        <h1>行业资讯</h1>
        <h1>INDUSTRY</h1>
        <h3 @click="toNews(2)">LOOK MORE</h3>
      </li>
      <li>
        <h1>常见问题</h1>
        <h1>PROBLEM</h1>
        <h3 @click="toNews(3)">LOOK MORE</h3>
      </li>
    </ul>
    <nuxt-link :to="moreLink" tag="li" class="main-more" v-if="content.tag !== 'news'">
      <span>MORE</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      moreLink: "/product",
      product: [
        {
          tag: "big",
          url: "1.png",
        },
        {
          tag: "small",
          url: "2.png",
        },
        {
          tag: "small",
          url: "3.png",
        },
        {
          tag: "big",
          url: "4.png",
        },
        {
          tag: "big",
          url: "5.png",
        },
        {
          tag: "small",
          url: "6.png",
        },
        {
          tag: "small",
          url: "7.png",
        },
        {
          tag: "big",
          url: "8.png",
        },
        {
          tag: "big",
          url: "9.png",
        },
        {
          tag: "small",
          url: "10.png",
        },
      ],
      project: ["12.png", "13.png", "14.png", "15.png"],
    };
  },
  mounted() {
    if (this.content.tag === "product") {
      this.moreLink = "/product";
    } else if (this.content.tag === "project") {
      this.moreLink = "/project";
    }
  },
  methods: {
    toNews(param) {
      let active = "";
      if (param === 1) {
        active = "news";
      } else if (param === 2) {
        active = "industry";
      } else {
        active = "problem";
      }
      this.$router.push({
        path: "/news",
        query: {
          active,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  padding: 88px 45px 0;
  max-width: 1920px;
  margin: 0 auto;
  // 标题
  .main_title {
    margin-bottom: 36px;
    color: #333;
    text-align: center;
    h3 {
      margin: 0 0 20px;
      font-size: 70px;
      font-weight: bold;
    }
    p {
      margin: 0;
      font-size: 40px;
      font-weight: bold;
    }
  }
  // 图片
  // 产品设计
  ul.product {
    li {
      height: 598px;
      padding: 0.3%;
      box-sizing: border-box;
      display: inline-block;
      &.big {
        width: 64%;
      }
      &.small {
        width: 36%;
      }
    }
  }
  // 工程案例
  ul.project {
    li {
      width: 24.7%;
      height: 560px;
      display: inline-block;
    }
  }
  // 新闻资讯
  ul.news {
    li {
      width: 33%;
      height: 438px;
      display: inline-block;
      color: #fff;
      padding-top: 138px;
      padding-left: 44px;
      box-sizing: border-box;
      &:nth-of-type(1) {
        background-color: #585858;
      }
      &:nth-of-type(2) {
        background-color: #f33142;
      }
      &:nth-of-type(3) {
        background-color: #000;
      }
      h3 {
        width: 156px;
        height: 52px;
        line-height: 52px;
        text-align: center;
        border: 1px solid #fff;
        border-radius: 40px;
        margin-top: 80px;
        cursor: pointer;
      }
    }
  }
  // 更多按钮
  .main-more {
    display: block;
    width: 216px;
    height: 74px;
    line-height: 72px;
    overflow: hidden;
    margin: 60px auto;
    border-width: 1px 8px;
    border-style: solid;
    border-color: #feeaec;
    border-radius: 74px;
    -webkit-border-radius: 74px;
    -moz-border-radius: 74px;
    -ms-border-radius: 74px;
    -o-border-radius: 74px;
    font-size: 26px;
    color: #fff;
    text-align: center;
    background-color: #f33142;
    cursor: pointer;
    span {
      display: block;
    }
  }
}
</style>