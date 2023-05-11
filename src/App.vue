<template>
  <router-link to="/login">登录</router-link> |
  <router-link to="/main">首页</router-link>
  <router-view />
  <el-button>哈哈哈哈</el-button>
</template>
<script lang="ts">
import { ElButton } from 'element-plus'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    ElButton
  }
})
</script>

<style lang="less">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
