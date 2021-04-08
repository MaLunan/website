<template>
  <section>
    <ul class="pic_wrap">
      <li v-for="item,i in pic" :key="i">
        <nuxt-link tag="a" :to="item.path">
          <img :src="require(`@/assets/imgs/project/${item.name}.png`)" alt />
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
  asyncData({ params }) {
    switch (params.type) {
      case "check":
        return {
          pic: [
            {
              name: 7,
              path: "/param",
            },
            {
              name: 8,
              path: "/param",
            },
            {
              name: 9,
              path: "/param",
            },
          ],
        };
      case "food":
        return {
          pic: [
            {
              name: 1,
              path: "/param",
            },
            {
              name: 2,
              path: "/param",
            },
            {
              name: 4,
              path: "/param",
            },
          ],
        };
      case "visit":
        return {
          pic: [
            {
              name: 3,
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
          ],
        };
      default:
        return {
          pic: [
            {
              name: 1,
              path: "/param",
            },
            {
              name: 2,
              path: "/param",
            },
            {
              name: 3,
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
            {
              name: 9,
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
    width: 33.33%;
    display: inline-block;
    padding: 0 0.1%;
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