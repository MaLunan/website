<template>
  <section class="wrap">
    <navigation :lable="product" :active="active"></navigation>
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
export default {
  data() {
    return {
      product: [
        "product",
        {
          path: "/product",
          name: "全部",
        },
        {
          path: "/product/check",
          name: "自助值机",
        },
        {
          path: "/product/food",
          name: "自助点餐机",
        },
        {
          path: "/product/visit",
          name: "自助访客机",
        },
      ],
      active: "全部",
    };
  },
  created: function () {
    this.setactive(this.$route.path);
  },
  watch: {
    $route: function () {
      this.setactive(this.$route.path);
    },
  },
  methods: {
    // 根据路由变化设置背景图
    setactive: function (path) {
      let active = "";
      if (path === "/product") {
        active = "全部";
      } else if (path === "/product/check") {
        active = "自助值机";
      } else if (path === "/product/food") {
        active = "自助点餐机";
      } else if (path === "/product/visit") {
        active = "自助访客机";
      }
      this.active = active;
    },
  },
};
</script>
<style lang="less" scoped>
.wrap {
  padding-bottom: 160px;
}
</style>