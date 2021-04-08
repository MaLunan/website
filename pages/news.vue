<template>
  <section class="wrap">
    <ul class="title" @click="tabClick">
      <li :class="active==='news'?'active':''">公司新闻</li>
      <li :class="active==='industry'?'active':''">行业资讯</li>
      <li :class="active==='problem'?'active':''">常见问题</li>
    </ul>
    <ul class="list">
      <li v-for="item,i in list" :key="i">
        <a href="javascript:void(0);" class="clearfix">
          <div class="pic">
            <img :src="require(`@/assets/imgs/project/${item.pic}.png`)" />
          </div>
          <div class="desc">
            <h3>
              <span>推荐</span>
              {{item.title}}
            </h3>
            <p>{{item.subTitle}}&nbsp;&nbsp; &nbsp; &nbsp;{{item.content}}</p>
            <div class="ft">
              <span class="sj">{{item.sj}}</span>
              <span class="ydl">{{item.ydl}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: "news",
      list: [
        {
          pic: 2,
          title: "助力政府信息化高速发展——智加设计X中科信息",
          subTitle: "01 中科信息",
          content:
            "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
          sj: "2021-04-08",
          ydl: "1919",
        },
        {
          pic: 6,
          title: "助力政府信息化高速发展——智加设计X中科信息",
          subTitle: "01 中科信息",
          content:
            "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
          sj: "2021-04-08",
          ydl: "1919",
        },
        {
          pic: 5,
          title: "助力政府信息化高速发展——智加设计X中科信息",
          subTitle: "01 中科信息",
          content:
            "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
          sj: "2021-04-08",
          ydl: "1919",
        },
      ],
    };
  },
  methods: {
    tabClick(event) {
      let e = event || window.event;
      if (e.target.innerText === "公司新闻") {
        this.active = "news";
        this.list = [
          {
            pic: 2,
            title: "助力政府信息化高速发展——智加设计X中科信息",
            subTitle: "01 中科信息",
            content:
              "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
            sj: "2021-04-08",
            ydl: "1919",
          },
          {
            pic: 6,
            title: "助力政府信息化高速发展——智加设计X中科信息",
            subTitle: "01 中科信息",
            content:
              "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
            sj: "2021-04-08",
            ydl: "1919",
          },
          {
            pic: 5,
            title: "助力政府信息化高速发展——智加设计X中科信息",
            subTitle: "01 中科信息",
            content:
              "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
            sj: "2021-04-08",
            ydl: "1919",
          },
        ];
      } else if (e.target.innerText === "行业资讯") {
        this.active = "industry";
        this.list = [
          {
            pic: 1,
            title: "助力政府信息化高速发展——智加设计X中科信息",
            subTitle: "01 中科信息",
            content:
              "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
            sj: "2021-04-08",
            ydl: "1919",
          },
          {
            pic: 3,
            title: "助力政府信息化高速发展——智加设计X中科信息",
            subTitle: "01 中科信息",
            content:
              "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
            sj: "2021-04-08",
            ydl: "1919",
          },
          {
            pic: 4,
            title: "助力政府信息化高速发展——智加设计X中科信息",
            subTitle: "01 中科信息",
            content:
              "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
            sj: "2021-04-08",
            ydl: "1919",
          },
        ];
      } else if (e.target.innerText === "常见问题") {
        this.active = "problem";
        this.list = [
          {
            pic: 9,
            title: "助力政府信息化高速发展——智加设计X中科信息",
            subTitle: "01 中科信息",
            content:
              "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
            sj: "2021-04-08",
            ydl: "1919",
          },
          {
            pic: 8,
            title: "助力政府信息化高速发展——智加设计X中科信息",
            subTitle: "01 中科信息",
            content:
              "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
            sj: "2021-04-08",
            ydl: "1919",
          },
          {
            pic: 7,
            title: "助力政府信息化高速发展——智加设计X中科信息",
            subTitle: "01 中科信息",
            content:
              "中科院成都信息技术股份有限公司（简称中科信息），是由创立于1958年的中国科学院成都计算机应用研究所整体转制而来，中科院直接控股的高科技公司。主营业务涉足数字会议产品研制与服务、工业计算机应用、信息系统集成和应用软件产品开发等几大领域。中科信息承继了成都计算所在数学算法等领...",
            sj: "2021-04-08",
            ydl: "1919",
          },
        ];
      }
    },
  },
  created() {
    if (this.$route.query.active) {
      this.active = this.$route.query.active;
    } else {
      this.active = "news";
    }
    console.log(this.$route.query);
  },
};
</script>

<style lang="less" scoped>
.clearfix:after {
  clear: both;
  display: block;
  visibility: hidden;
  height: 0;
  content: ".";
  font-size: 0;
}
.wrap {
  padding-bottom: 160px;
  .title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 33.3%;
      height: 100px;
      line-height: 100px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      &.active {
        background-color: #f33142;
        color: #fff;
      }
      &:hover {
        background-color: #f33142;
        color: #fff;
      }
    }
  }
  .list {
    overflow: hidden;
    padding: 80px 20px 0;
    li {
      margin-bottom: 40px;
      a {
        color: #000;
        position: relative;
        display: block;
        padding: 20px;
        transition: all 0.2s;
        -webkit-transition: all 0.2s;
        text-decoration: none;
        background-color: transparent;
        &:hover {
          box-shadow: 0 0 15px rgb(0 0 0 / 20%);
          .pic img {
            transform: scale(1.05);
            -webkit-transform: scale(1.05);
          }
        }
        .pic {
          width: 550px;
          height: 270px;
          margin-right: 30px;
          float: left;
        }
        .desc h3 {
          line-height: 38px;
          margin: 58px 0 20px;
          font-size: 24px;
          span {
            display: inline-block;
            height: 24px;
            line-height: 24px;
            overflow: hidden;
            padding: 0 7px;
            margin-right: 20px;
            font-size: 14px;
            font-weight: normal;
            color: #fff;
            vertical-align: middle;
            background-color: #626262;
          }
        }
        .desc p {
          line-height: 22px;
          overflow: hidden;
          margin: 0;
          font-size: 14px;
          color: #4c4c4c;
        }
        .desc .ft {
          position: absolute;
          right: 10px;
          bottom: 10px;
          border-top: 2px solid #dcdcdc;
          color: #666;
          left: 600px;
          padding: 10px 0;
          & .sj {
            background-image: url(@/assets/imgs/news/time.png);
          }
          & .ydl {
            background-image: url(@/assets/imgs/news/eyes.png);
          }
          span {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            overflow: hidden;
            padding-left: 23px;
            margin-right: 50px;
            background-repeat: no-repeat;
            background-position: left center;
          }
        }
      }
    }
  }
}
</style>