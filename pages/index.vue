<template>
  <div class="container">
    <!-- 产品设计案例 -->
    <home :content="product"></home>
    <!-- 关于我们 -->
    <section class="about_wrap">
      <div class="img_box">
        <img src="@/assets/imgs/home/11.png" alt />
      </div>
      <el-card class="text box-card">
        <div class="about">
          <h3>关于我们</h3>
          <div class="about_en">About Us</div>
          <p>
            北京恒思创新自动化设备有限公司(简称：恒思创新)主营自助值机设备及自动化设备的公司。
            公司成立于2013年，总部位于北京经济技术开发区，生产及加工在河北省，拥有3000平米以上的生产及加工场地...
          </p>
          <div class="more" @click="toContact(1)">
            查看更多
            <img src="@/assets/imgs/home/arrow.png" alt />
          </div>
        </div>
        <div class="contact">
          <div class="top">
            <div>联系我们</div>
            <h3>CONTACT US</h3>
            <i class="contact_us"></i>
          </div>
          <el-divider></el-divider>
          <div class="bottom">
            <img src="@/assets/imgs/home/more.png" alt />
            <div class="more" @click="toContact(2)">
              查看更多
              <img src="@/assets/imgs/home/arrow2.png" alt />
            </div>
          </div>
        </div>
      </el-card>
    </section>
    <!-- 工程案例 -->
    <home :content="project"></home>
    <!-- 热点新闻资讯 -->
    <home :content="news" class="news"></home>
    <!-- 服务客户 -->
    <section class="customer">
      <div class="title">
        <h3>
          <span>服务客户</span>
        </h3>
        <p>CUSTOMERS</p>
      </div>
      <div class="carousel_wrap">
        <div class="leftArrow">
          <img src="@/assets/imgs/home/left.png" @click="arrowClick('left')" />
        </div>
        <el-carousel
          class="content"
          indicator-position="none"
          arrow="never"
          :autoplay="false"
          ref="cardShow"
        >
          <el-carousel-item v-for="item in 3" :key="item">
            <el-row type="flex" justify="space-around">
              <el-col :span="4" v-for="(item, index) in customer" :key="index" class="img_col">
                <img :src="require(`@/assets/imgs/home/${item}`)" />
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
        <div class="rightArrow">
          <img src="@/assets/imgs/home/right.png" @click="arrowClick('right')" />
        </div>
      </div>
    </section>
    <!-- 联系电话 -->
    <section class="bootom_contact">
      <div class="text">
        我们服务的不只是某个行业
        <br />而是一个整个社会的人民群众
      </div>
      <div class="tel">
        <div class="logo_border">
          <img src="~/assets/imgs/header/logo.png" />
        </div>
        <div class="company_name">
          <div>北京恒思创新自动化设备有限公司</div>
          <div>BEIJING C&I Automation Equipment Co., Ltd.（CIAE）</div>
        </div>
        <p>了解更多请致电全国服务热线</p>
        <div class="company_tel">
          <img src="~/assets/imgs/header/tel.png" />
          <span>010-63531805</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "OUR CASE",
        text: "产品设计案例",
        tag: "product",
      },
      project: {
        title: "ENGINEERING CASE",
        text: "工程案例",
        tag: "project",
      },
      news: {
        title: "NEWS CENTER",
        text: "热点新闻资讯",
        tag: "news",
      },
      customer: ["16.png", "17.png", "18.png", "19.png"],
    };
  },
  methods: {
    arrowClick(val) {
      if (val === "right") {
        this.$refs.cardShow.next();
      } else {
        this.$refs.cardShow.prev();
      }
    },
    toContact(param) {
      let path = "";
      if (param === 1) {
        path = "/about";
      } else {
        path = "/contact";
      }
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="less" scoped>
// 关于我们
.about_wrap {
  position: relative;
  margin-bottom: 180px;
  .img_box {
    height: 279px;
  }
  .text {
    width: 60%;
    height: 396px;
    position: absolute;
    top: 100px;
    left: 20%;
    z-index: 888;
    border: none;
    /deep/ .el-card__body {
      display: flex;
      height: 100%;
      padding: 0;
      .about {
        width: 60%;
        padding: 60px;
        box-sizing: border-box;
        .about_en {
          color: #b4b4b4;
          margin-top: 10px;
        }
        p {
          padding: 10px 0;
          font-size: 16px;
          color: #8d8d8d;
          line-height: 24px;
        }
        .more {
          margin-top: 30px;
          width: 136px;
          height: 44px;
          text-align: center;
          line-height: 44px;
          border: 1px solid #f33142;
          color: #f33142;
          cursor: pointer;
          img {
            width: 8px;
            height: 13px;
            margin-left: 10px;
            vertical-align: baseline;
          }
        }
      }
      .contact {
        width: 40%;
        background-color: #f33142;
        color: #fff;
        .top {
          padding: 30px;
          box-sizing: border-box;
          margin-bottom: 167px;
          .contact_us {
            width: 28px;
            height: 3px;
            background-color: #fff;
            display: inline-block;
          }
        }
        .bottom {
          height: 68px;
          padding: 0 30px 0 60px;
          box-sizing: border-box;
          > img {
            width: 40px;
            height: 40px;
            margin-right: 120px;
            vertical-align: middle;
          }
          .more {
            display: inline-block;
            width: 100px;
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            img {
              width: 8px;
              height: 13px;
              vertical-align: baseline;
            }
          }
        }
      }
    }
  }
}
.news {
  padding: 0 45px 0 !important;
}
// 服务客户
.customer {
  padding: 112px 0 108px;
  .title {
    margin-bottom: 46px;
    position: relative;
    text-align: center;
  }
  h3 {
    position: relative;
    display: inline-block;
    padding: 0 68px;
    margin: 0 0 8px;
    font-size: 30px;
    font-weight: normal;
    &::before {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      height: 1px;
      background-color: #615b5a;
      content: "";
    }
    span {
      position: relative;
      padding: 0 12px;
      background-color: #fff;
    }
  }
  p {
    margin: 0;
    font-size: 15px;
  }
  // 客户logo滚动图
  .carousel_wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 100px;
    height: 150px;
    .leftArrow,
    .rightArrow {
      width: 32px;
    }
    .content {
      flex: 1;
      text-align: center;
      padding: 0 80px;
      .img_col {
        line-height: 342px;
      }
      .img_col:nth-of-type(3) {
        line-height: 402px;
      }
      .img_col:nth-of-type(1) > img {
        width: 208px;
        height: 64px;
      }
      .img_col:nth-of-type(2) > img {
        width: 167px;
        height: 95px;
      }
      .img_col:nth-of-type(3) > img {
        width: 183px;
        height: 115px;
      }
      .img_col:nth-of-type(4) > img {
        width: 96px;
        height: 64px;
      }
    }
  }
}
// 底部大图+联系电话
.bootom_contact {
  color: #fff;
  position: relative;
  width: 100%;
  height: 794px;
  background: url(@/assets/imgs/home/20.png) no-repeat center;
  .text {
    font-size: 24px;
    position: absolute;
    top: 35%;
    left: 16%;
    line-height: 40px;
  }
  .tel {
    position: absolute;
    top: 35%;
    right: 8%;
    .company_name,
    .logo_border {
      display: inline-block;
    }
    .logo_border {
      width: 90px;
      height: 40px;
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
