<template>
  <div class="page-search">
    <div class="search">
      <FTForm v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <h2 class="header">高级检索</h2>
        </template>
        <template #footer>
          <div class="footer">
            <el-button type="primary" icon="Refresh">重置</el-button>
            <el-button type="primary" icon="Search">搜索</el-button>
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
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
