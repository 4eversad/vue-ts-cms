<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs
      :stretch="true"
      v-model="loginMode"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane class="account" label="账号登录" name="account"
        ><account-login ref="accountRef"></account-login>
      </el-tab-pane>
      <el-tab-pane label="手机号登录 " name="phoneNumber"
        ><phone-login></phone-login
      ></el-tab-pane>
    </el-tabs>
    <!-- 记住密码 -->
    <div class="account-control">
      <el-checkbox v-if="loginMode == 'account'" v-model="isKeepPassword"
        >记住密码</el-checkbox
      >
      <el-link v-if="loginMode == 'account'" type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import accountLogin from './account-login.vue'
import phoneLogin from './phone-login.vue'

import { ref } from 'vue'
export default defineComponent({
  components: { accountLogin, phoneLogin },
  setup() {
    const loginMode = ref<string | number | undefined>('account')
    // 这里先不写任何值,就默认为any,否则下面调用方法时会报错
    const accountRef = ref<InstanceType<typeof accountLogin>>()
    // 是否记住密码
    const isKeepPassword = ref<boolean>(false)
    const handleClick = (tab: TabsPaneContext, event: Event) => {
      loginMode.value = tab.paneName
      console.log(tab.paneName, event)
    }
    const handleLoginClick = () => {
      // 判断是账号登录还是手机号码登录
      console.log('点击了登录')
      if (loginMode.value == 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('手机号登录')
      }
    }
    return {
      loginMode,
      handleClick,
      isKeepPassword,
      handleLoginClick,
      accountRef
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  width: 320px;
  margin-bottom: 200px;
  .title {
    text-align: center;
    color: #444;
  }
}
.account-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-btn {
  margin-top: 20px;
  width: 100%;
}
</style>
