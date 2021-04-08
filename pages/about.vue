<template>
  <section class="wrap">
    <ul class="title" @click="tabClick">
      <li :class="active==='introduction'?'active':''">公司简介</li>
      <li :class="active==='culture'?'active':''">企业文化</li>
    </ul>
    <div class="list">
      <div class="img_box" v-if="active==='introduction'">
        <img :src="require('@/assets/imgs/about/introduction.png')" alt />
      </div>
      <div class="content">
        <div class="introduction" v-if="active==='introduction'">
          <p>北京恒思创新自动化设备有限公司(简称恒思创新）成立于2006年4月，注册地址北京市西城区；在北京经济技术开发区拥有千余平米开发、研制中心。主要经营自助设备的销售、产品代理、设备租赁等服务。</p>
          <p>恒思创新提供涉及自助设备的研发，设计以及计算机相关的技术咨询、产品开发，同时可提供安装，培训及产品的售后维修等完整生命周期的保障服务。</p>
          <p>自成立以来，恒思创新与全国各大航空公司，国际大型连锁餐饮集团、国家棋院等多家知名企、事业单位合作，以优质的服务态度，专业的设计能力及良好的服务赢得了客户的信任和好评。</p>
          <p>恒思创新有专业的软，硬件技术服务团队，可为客户提供良好的售前、售后的技术支持服务，在上海、深圳设有办事处，为周边的客户提供及时快捷的技术支持服务。</p>
          <p>恒思创新秉承“用户至上，信誉至上，质量至上”的宗旨，热诚为广大客户提供热情、周到、专业的服务。</p>
          <p>恒思创新热诚欢迎各界前来参观、考察、洽谈业务。</p>
        </div>
        <div class="culture" v-if="active==='culture'">
          <p>精益求精，锐意进取，开拓创新。</p>
          <p>用户第一，信誉至上，诚信为本。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: "introduction",
    };
  },
  methods: {
    tabClick(event) {
      let e = event || window.event;
      if (e.target.innerText === "公司简介") {
        this.active = "introduction";
      } else if (e.target.innerText === "企业文化") {
        this.active = "culture";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  padding-bottom: 160px;
  .title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 50%;
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
    margin-top: 40px;
    .content {
      padding: 40px 80px 0;
      p {
        text-indent: 24px;
      }
    }
  }
}
</style>