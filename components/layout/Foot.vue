<template>
  <footer>
    <div class="hd">
      <h3>Contact us</h3>
    </div>
    <div class="footer">
      <!-- 导航 -->
      <ul class="nav">
        <nuxt-link to="/" tag="li">首页</nuxt-link>
        <nuxt-link :to="{name:'product',params:{scrollToTop:true}}" tag="li">产品展示</nuxt-link>
        <nuxt-link :to="{name:'project',params:{scrollToTop:true}}" tag="li">工程案例</nuxt-link>
        <nuxt-link to="/news" tag="li">新闻资讯</nuxt-link>
        <nuxt-link to="/about" tag="li">关于我们</nuxt-link>
        <nuxt-link to="/contact" tag="li">联系我们</nuxt-link>
      </ul>
      <!-- 联系方式 -->
      <ul class="contact">
        <li>
          <i>
            <img src="@/assets/imgs/footer/tel.png" />
          </i>
          <span>Tel/010-63531805</span>
        </li>
        <li>
          <i>
            <img src="@/assets/imgs/footer/fex.png" />
          </i>
          <span>Fex/010-63872302</span>
        </li>
        <li>
          <i>
            <img src="@/assets/imgs/footer/email.png" />
          </i>
          <span>E-mail/hftr@bjtairan.com</span>
        </li>
        <li>
          <i>
            <img src="@/assets/imgs/footer/add.png" />
          </i>
          <span>北京市北京经济开发区科创十四街20号院9号楼1单元2层3层</span>
        </li>
      </ul>
    </div>
    <!-- 备案号 -->
    <div class="record">京ICP备20027250号</div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
footer {
  width: 100%;
  height: 650px;
  position: relative;
  background-color: #000;
  color: #fff;
  .hd {
    position: relative;
    top: -60px;
    z-index: 99;
    width: 1200px;
    margin: 0 auto 23px;
    user-select: none;
    h3 {
      height: 120px;
      line-height: 120px;
      overflow: hidden;
      margin: 0;
      font-size: 60px;
      font-weight: normal;
      font-family: "Microsoft Yahei";
      color: #fff;
      text-align: center;
      background-color: #f33142;
    }
  }
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 100px;
    .nav {
      user-select: none;
      li {
        cursor: pointer;
      }
    }
    li {
      margin: 20px 0;
    }
    // 联系方式
    .contact {
      i {
        width: 22px;
        height: 22px;
        display: inline-block;
        vertical-align: middle;
      }
      span {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  // 备案号
  .record {
    margin-top: 100px;
    width: 100%;
    text-align: center;
    user-select: none;
  }
}
</style>