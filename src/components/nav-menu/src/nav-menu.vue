<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapse" class="title">vue+ts后台管理</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <!-- 第一个大类 -->
      <template v-for="item in userMenus" :key="item.id">
        <!-- 如果是可以展开的分类 -->
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon" :class="item.icon.substr(8)">
                <component :is="item.icon.substr(8)" />
              </el-icon>
              <span> {{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuClick(subitem)"
              >
                <template #title>
                  <el-icon v-if="subitem.icon" :class="subitem.icon">
                    <component :is="subitem.icon.substr(0, 6)" />
                  </el-icon>
                  <span> {{ subitem.name }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>

          <!-- 如果还可以继续展开(有children属性) -->
        </template>
        <!-- 不能展开的分类 -->
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    isCollapse: {
      default: false,
      type: Boolean
    }
  },
  components: {},
  setup() {
    const router = useRouter()

    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const store = useStore()
    const userMenus = computed(() => {
      return store.state.loginModule.userMenus
    })
    const handleMenuClick = (item: any) => {
      console.log(item.url)

      console.log(item)
      router.push({
        path: item.url
      })
    }
    return { store, userMenus, handleOpen, handleClose, handleMenuClick }
  }
})
</script>
<style lang="less" scoped>
.nav-menu {
  height: 100%;
  // background-color: #001529 !important;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff !important;
    }
  }

  .el-menu {
    border-right: none;
    background-color: #001529 !important;
    ::v-deep(.el-menu-item) {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
      color: #b7bdc3 !important;
    }
  }

  // 目录
  ::v-deep(.el-submenu) {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
    color: white;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #0a60bd !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
