<template>
  <div class="app">
    <ElConfigProvider :locale="zhCn"> <router-view /></ElConfigProvider>
  </div>
</template>
<script lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'app',
  components: { ElConfigProvider },
  setup() {
    return { zhCn }
  }
})
</script>

<style lang="less" scoped>
.app {
  height: 100%;
}
</style>
