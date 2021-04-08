<template>
  <section>
    <ul class="pic_wrap">
      <li v-for="item,i in pic" :key="i">
        <nuxt-link :to="item.path" tag="a">
          <img :src="require(`@/assets/imgs/product/${item.name}.png`)" alt />
          <div class="desc">
            <div class="tb">
              <div class="tbc">
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  scrollToTop: false,
  data() {},
  mounted() {},
  // beforeRouteUpdate(to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   console.log(
  //     document.documentElement.scrollTop,
  //     "嘻嘻",
  //     to,
  //     "啊啊啊啊",
  //     from
  //   );
  //   window.scrollTo(700, 0);
  //   // let scroll = document.documentElement && document.documentElement.scrollTop;
  //   // window.localStorage.setItem("scroll", scroll);
  //   console.log(document.documentElement.scrollTop, "哈哈");
  //   next();
  // },
  asyncData({ params }) {
    switch (params.type) {
      case "check":
        return {
          pic: [
            {
              name: 3,
              path: "/param",
            },
            {
              name: 2,
              path: "/param",
            },
            {
              name: 1,
              path: "/param",
            },
          ],
        };
      case "food":
        return {
          pic: [
            {
              name: 6,
              path: "/param",
            },
            {
              name: 7,
              path: "/param",
            },
            {
              name: 8,
              path: "/param",
            },
          ],
        };
      case "visit":
        return {
          pic: [
            {
              name: 4,
              path: "/param",
            },
            {
              name: 5,
              path: "/param",
            },
          ],
        };
      default:
        return {
          pic: [
            {
              name: 3,
              path: "/param",
            },
            {
              name: 2,
              path: "/param",
            },
            {
              name: 1,
              path: "/param",
            },
            {
              name: 4,
              path: "/param",
            },
            {
              name: 5,
              path: "/param",
            },
            {
              name: 6,
              path: "/param",
            },
            {
              name: 7,
              path: "/param",
            },
            {
              name: 8,
              path: "/param",
            },
          ],
        };
    }
  },
};
</script>

<style lang="less" scoped>
.pic_wrap {
  width: 100%;
  li {
    width: 33.3%;
    display: inline-block;
    padding: 0 0.2%;
    height: 310px;
    box-sizing: border-box;
    display: inline-block;
    a {
      position: relative;
      display: block;
      overflow: hidden;
      text-decoration: none;
      background-color: transparent;
      &:hover {
        img {
          transform: scale(1.1);
        }
        .desc {
          visibility: visible;
          transform: translateY(0);
          opacity: 1;
        }
      }
      img {
        transition: all 1s;
        display: block;
      }
      .desc {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        background-color: rgba(241, 73, 87, 0.75);
        visibility: hidden;
        transition: all 0.3s;
        transform: translateY(100%);
        opacity: 0;
        .tb {
          display: table;
          width: 100%;
          height: 100%;
          .tbc {
            display: table-cell;
            width: 100%;
            vertical-align: middle;
            p {
              margin: 0;
              font-size: 18px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>