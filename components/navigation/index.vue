<template>
  <ul :class="lable[0]==='menu'?'ul_head':'ul_tab'">
    <li
      :class="['nav_li',active===item.name?'active':'']"
      v-for="(item,index) in title"
      :key="index"
      @mouseenter="enter(index)"
      @mouseleave="leave(index)"
    >
      <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
    </li>
  </ul>
</template>


<script>
export default {
  // name: "Header",
  props: {
    lable: {
      type: Array,
      required: true,
      default: () => [],
    },
    active: {
      type: String,
      default: "全部",
    },
  },
  data() {
    return {
      titleTemp: JSON.parse(JSON.stringify(this.lable)),
    };
  },
  computed: {
    title: function () {
      let temp = this.lable.filter((item, index) => {
        return index > 0 ? item : "";
      });
      return temp;
    },
  },
  methods: {
    enter: function (val) {
      if (this.titleTemp[0] === "menu") {
        this.title[val].name = this.titleTemp[val + 1].enName;
      }
    },
    leave: function (val) {
      if (this.titleTemp[0] === "menu") {
        this.title[val].name = this.titleTemp[val + 1].name;
      }
    },
  },
};
</script>

<style lang='less' scoped>
// 头部导航样式
.ul_head {
  height: 44px;
  li {
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    position: relative;
    margin-right: 15px;
    a {
      color: #fff;
      display: inline-block;
      text-align: center;
    }
    &:not(:first-child) a {
      width: 64px;
    }
    &:first-child a {
      width: 44px;
    }
  }
  .nav_li::before {
    width: 0;
    height: 2px;
    position: absolute;
    bottom: -4px;
    left: 50%;
    background-color: #fff;
    content: "";
    transition: all 0.2s;
    z-index: -1;
  }
  .nav_li:hover.nav_li::before {
    width: 100%;
    left: 0;
  }
  .active.nav_li::before {
    width: 100%;
    left: 0;
  }
  .nav_li:hover {
    opacity: 1;
  }
  &:hover li {
    opacity: 0.5;
  }
}
// 产品、案例tab样式
.ul_tab {
  height: 96px;
  li {
    display: inline-block;
    margin: 0 30px;
    height: 96px;
    line-height: 96px;
    font-size: 18px;
    position: relative;
    padding: 0 20px;
  }
  .nav_li::before {
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 10px;
    left: 0;
    background-color: #f33142;
    content: "";
    transition: all 0.4s;
    z-index: -1;
  }
  .nav_li:hover.nav_li::before {
    height: 6px;
  }
  .active.nav_li::before {
    width: 100%;
    height: 6px;
  }
  .active > a {
    color: #f33142;
  }
  a {
    color: #262626;
    display: block;
    height: 100%;
    width: 100%;
  }
  a:hover {
    color: #f33142;
  }
}
</style>