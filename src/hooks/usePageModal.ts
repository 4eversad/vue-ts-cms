import { ref } from 'vue'
import pageModal from '@/components/page-modal'
type CallBackFn = () => void
export function usePageModal(newCb?: CallBackFn, editCb?: CallBackFn) {
  const defaultInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof pageModal>>()

  // 新增
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  // 编辑
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }
  return [pageModalRef, handleNewData, handleEditData, defaultInfo]
}
