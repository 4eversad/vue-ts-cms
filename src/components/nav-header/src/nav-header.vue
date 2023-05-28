<template>
  <div class="nav-header">
    <!-- 展开收起图标 -->
    <el-icon :size="20" @click="handleFoldClick">
      <template v-if="isFold">
        <Expand />
      </template>
      <template v-else>
        <Fold />
      </template>
    </el-icon>
    <div class="content">
      <!-- 面包屑 -->
      <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './userInfo.vue'
import navBreadcrumb from '@/base-ui/breadcrumb/index'
import { pathMapBreadCrumb } from '@/utils/map-menu'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['foldChange'],
  components: { UserInfo, navBreadcrumb },
  setup(props, { emit }) {
    const isFold = ref<boolean>(false)
    const store = useStore()

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const breadcrumbs = computed(() => {
      const route = useRoute()
      const currentPath = route.path
      const userMenus = store.state.loginModule.userMenus
      return pathMapBreadCrumb(userMenus, currentPath)
    })

    return { handleFoldClick, isFold, breadcrumbs }
  }
})
</script>
<style lang="less" scoped>
.el-icon {
  cursor: pointer;
}
.nav-header {
  width: 100%;
  display: flex;
}
.content {
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 0 20px;
}
</style>
