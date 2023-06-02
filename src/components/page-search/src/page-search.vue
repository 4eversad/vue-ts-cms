<template>
  <div class="page-search">
    <div class="search">
      <FTForm v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <h2 class="header">高级检索</h2>
        </template>
        <template #footer>
          <div class="footer">
            <el-button type="primary" icon="Refresh" @click="handleResetClick"
              >重置</el-button
            >
            <el-button type="primary" icon="Search" @click="handleQueryClick"
              >搜索</el-button
            >
          </div>
        </template>
      </FTForm>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FTForm from '@/base-ui/form'
export default defineComponent({
  components: { FTForm },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field决定的
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    // 优化2: 重置
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }
    // 优化3: 点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, handleResetClick, handleQueryClick }
  }
})
</script>
<style lang="less" scoped>
.header {
  text-align: center;
  color: #444;
}
.footer {
  text-align: right;
  margin-right: 30px;
  padding: 0 0 20px 0;
}
</style>
