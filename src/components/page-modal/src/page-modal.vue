<template>
  <div class="page-modal">
    <el-dialog
      destroy-on-close
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
    >
      <FTForm v-bind="modalConfig" v-model="formData"></FTForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import FTForm from '@/base-ui/form'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  components: { FTForm },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newVal) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )
    return { dialogVisible, formData }
  }
})
</script>
<style lang="less" scoped></style>
