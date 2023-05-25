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
      <div>面包屑</div>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './userInfo.vue'
export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref<boolean>(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return { handleFoldClick, isFold }
  },
  components: { UserInfo }
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
