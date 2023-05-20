<template>
  <div class="account-login">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import type { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    // 获取组件类型
    const formRef = ref<InstanceType<typeof ElForm>>()
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        // 验证通过
        if (valid == true) {
          // 判断是否需要记住密码
          if (isKeepPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          }
          store.dispatch('loginModule/accountLoginAction', { ...account })
        }
      })
    }

    return { account, rules, loginAction, formRef }
  }
})
</script>
<style lang="less" scoped></style>
