<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          size="small"
        />
        <span style="margin-left: 8px">{{ username }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="close" @click="logout"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'
import router from '@/router/index'
export default defineComponent({
  setup() {
    const store = useStore()
    const logout = () => {
      localCache.clearCache()
      router.push('/login')
    }
    const username = computed(() => {
      return store.state.loginModule.userInfo.name
    })
    return { username, logout }
  }
})
</script>

<style lang="less" scoped>
.el-dropdown-link:focus {
  outline: none;
}
.el-dropdown-link {
  display: flex !important;
  align-items: center;
  cursor: pointer;
}
</style>
