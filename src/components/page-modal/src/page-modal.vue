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
          <el-button type="primary" @click="handleConfirmClick()">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import FTForm from '@/base-ui/form'
import { useStore } from '@/store'
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
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    const store = useStore()
    watch(
      () => props.defaultInfo,
      (newVal) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )
    // 点击确定的逻辑
    const handleConfirmClick = () => {
      dialogVisible.value = false
      // 判断时编辑还是新建
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('systemModule/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch('systemModule/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      }
    }
    return { dialogVisible, formData, handleConfirmClick }
  }
})
</script>
<style lang="less" scoped></style>
