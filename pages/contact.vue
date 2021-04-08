<template>
  <section class="wrap">
    <div class="map">
      <div class="item clearfix">
        <div class="desc">
          <h3>北京总部</h3>
          <p>北京市北京经济开发区科创十四街20号院9号楼1单元2层3层</p>
          <p>010-63531805</p>
          <p>010-63872302</p>
          <p>hftr@bjtairan.com</p>
        </div>
        <no-ssr>
          <!-- <baidu-map class="map_wrap" center="北京"></baidu-map> -->

          <baidu-map
            class="map_wrap"
            :dragging="dragging"
            :center="center"
            :zoom="zoom"
            :max-zoom="max"
            :min-zoom="min"
            :scroll-wheel-zoom="scroll"
          >
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
            <bm-marker :position="center" :dragging="true">
              <bm-label
                content="恒思创新"
                :labelStyle="{color: 'red', fontSize : '16px'}"
                :offset="{width: 20, height: 0}"
              />
            </bm-marker>
          </baidu-map>
        </no-ssr>
      </div>
    </div>
    <div class="contact">
      <div class="tips">请留下您的问题,我们将尽快与您联系！</div>
      <div class="info">
        <div>
          <span>*</span>
          <span>您的姓名:</span>
          <input type="text" placeholder="请填写您的姓名" />
        </div>
        <div>
          <span>*</span>
          <span>手机号码:</span>
          <input type="text" placeholder="请填写手机号码" />
        </div>
        <div>
          <span>*</span>
          <span>电子邮箱:</span>
          <input type="text" placeholder="请填写电子邮箱" />
        </div>
        <div>
          <span>*</span>
          <span>留言内容:</span>
          <textarea
            class="form-control"
            name="attr_4"
            id="attr_4"
            rows="5"
            placeholder="请真实详尽填写留言内容"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="submit">
      <div>提交</div>
      <div>清除</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jump_path: "",
      center: { lng: 116.566607, lat: 39.779226 },
      zoom: 15, //缩放级别
      max: 22,
      min: 8,
      show: true, //显示标签
      scroll: true, //地图缩放
      dragging: true, //地图拖拽
    };
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style lang="less" scoped>
.wrap {
  padding-bottom: 160px;
  .map {
    padding: 40px 40px 0;
    .item {
      padding: 25px 42px;
      margin-bottom: 40px;
      background-color: #f2f2f2;
      overflow: hidden;
      .desc {
        float: left;
        width: 35%;
        h3 {
          margin: 0 0 30px;
          font-size: 28px;
          color: #000;
        }
        p {
          line-height: 20px;
          padding: 12px 0 12px 30px;
          margin: 0;
          font-size: 14px;
          color: #595757;
          background-repeat: no-repeat;
          background-position: left 11px;
        }
        p:nth-child(2) {
          background-image: url(@/assets/imgs/contact/add.png);
        }
        p:nth-child(3) {
          background-image: url(@/assets/imgs/contact/tel.png);
        }
        p:nth-child(4) {
          background-image: url(@/assets/imgs/contact/fex.png);
        }
        p:nth-child(5) {
          background-image: url(@/assets/imgs/contact/email.png);
        }
      }
      .map_wrap {
        width: 65%;
        height: 400px;
        float: right;
      }
    }
  }
  .contact {
    padding: 0 40px;
    .tips {
      border-top: 1px solid #f33142;
      color: #f33142;
      padding-left: 40px;
      background-color: #f2f2f2;
      height: 40px;
      line-height: 40px;
    }
    .info {
      padding: 0 100px;
      > div {
        height: 60px;
        line-height: 60px;
        display: inline-block;
        margin-right: 40px;
        padding: 10px 0;
        > span:nth-child(1) {
          color: #f33142;
          margin-right: -5px;
        }
        input {
          height: 35px;
          width: 260px;
          margin-left: 10px;
        }
        textarea {
          line-height: 20px;
          font-size: 14px;
          padding: 10px 15px;
          width: 88%;
          display: inline-block;
          vertical-align: top;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          margin-left: 10px;
        }
      }
      div:last-child {
        width: 100%;
      }
    }
  }
  input,
  textarea {
    border: 1px solid #efefef;
    outline: none;
  }
  .submit {
    margin-top: 80px;
    padding: 0 230px;
    div {
      display: inline-block;
      margin-right: 30px;
      padding: 10px 20px;
      color: #fff;
      border: 0;
      cursor: pointer;
      border-radius: 0.15rem;
      font-size: 14px;
    }
    div:nth-of-type(1) {
      background-color: #ea3516;
    }
    div:nth-of-type(2) {
      background-color: #767676;
    }
  }
}
</style>