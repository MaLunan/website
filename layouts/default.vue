<template>
  <div>
    <!-- 头部 -->
    <app-head></app-head>
    <!-- 内容区 -->
    <div class="main">
      <Nuxt />
    </div>
    <!-- 底部 -->
    <app-foot></app-foot>
    <!-- 回到顶部+电话 -->
    <div class="scroll transiton">
      <div class="company_tel">
        <img src="~/assets/imgs/header/tel.png" />
        <span>010-63531805</span>
      </div>
      <div class="scroll_top" @click="backTop">
        <span>></span>
        <span>返回顶部</span>
      </div>
    </div>
  </div>
</template>
<script>
import AppHead from "~/components/layout/Head";
import AppFoot from "~/components/layout/Foot";
export default {
  components: {
    AppHead,
    AppFoot,
  },
  methods: {
    backTop() {
      let scrollToptimer = setInterval(function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        var speed = top / 4;
        document.documentElement.scrollTop -= speed;
        if (top == 0) {
          clearInterval(scrollToptimer);
        }
      }, 30);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  min-height: 200px;
}
.scroll {
  position: fixed;
  right: -130px;
  top: 80%;
  width: 180px;
  height: 100px;
  background-color: rgba(153, 153, 153, 0.8);
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  .company_tel {
    width: 153px;
    height: 22px;
    margin-bottom: 15px;
    > img {
      width: 22px;
      vertical-align: middle;
    }
    > span {
      display: inline-block;
      color: #fff;
      vertical-align: middle;
      margin-left: 20px;
    }
  }
  .scroll_top {
    color: #fff;
    position: relative;
    top: 0px;
    span:nth-of-type(1) {
      display: inline-block;
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      transform: rotate(-90deg);
      font-size: 30px;
      margin-right: 20px;
      vertical-align: middle;
    }
  }
}
.scroll.transiton:hover {
  right: 20px;
}
.transiton {
  transition: all 500ms linear 500ms;
  -o-transition: all 500ms linear 500ms; /*兼容parsto内核*/
  -moz-transition: all 500ms linear 500ms; /*兼容gecko内核*/
  -webkit-transition: all 500ms linear 500ms; /*兼容webkit内核*/
}
</style>