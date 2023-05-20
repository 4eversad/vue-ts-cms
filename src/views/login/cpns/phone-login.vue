<template>
  <div class="phone-login">
    <el-form label-width="80px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model="phone.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode" class="getCode">
        <el-input v-model="phone.verifyCode"></el-input>
        <el-button class="get-btn" type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    interface Iphone {
      phoneNumber: string
      verifyCode: string
    }
    const phone = reactive<Iphone>({
      phoneNumber: '',
      verifyCode: ''
    })
    return { phone, rules }
  }
})
</script>
<style lang="less" scoped>
::v-deep(.el-form-item__content) {
  display: flex;
  flex-wrap: nowrap !important;
  justify-content: space-around;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
