<template>
  <section class="wrap">
    <navigation :lable="project" :active="active"></navigation>
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
export default {
  data() {
    return {
      project: [
        "project",
        {
          path: "/project",
          name: "全部",
        },
        {
          path: "/project/food",
          name: "餐饮门店",
        },
        {
          path: "/project/visit",
          name: "TP120自助访客机",
        },
        {
          path: "/project/check",
          name: "TP120自助值机",
        },
      ],
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
      if (path === "/project") {
        active = "全部";
      } else if (path === "/project/food") {
        active = "餐饮门店";
      } else if (path === "/project/visit") {
        active = "TP120自助访客机";
      } else if (path === "/project/check") {
        active = "TP120自助值机";
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