<template>
  <div class="role">
    <pageSearch
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>
    <pageContent
      :contentTableConfig="contentTableConfig"
      ref="pageContentRef"
      pageName="role"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    ></pageContent>

    <pageModal
      ref="pageModalRef"
      :default-info="defaultInfo"
      :modalConfig="modalConfig"
      pageName="role"
      :otherInfo="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </pageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/usePageModal'
import pageContent from '@/components/page-content/src/page-content.vue'
import pageSearch from '@/components/page-search'
import pageModal from '@/components/page-modal'
import { useStore } from '@/store'
import { ElTree } from 'element-plus'
import { getMenuLeafKeys } from '@/utils/map-menu'
export default defineComponent({
  name: 'role',
  components: { pageContent, pageSearch, pageModal },
  setup() {
    const store = useStore()
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const otherInfo = ref({})
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch() as any
    const editCallBack = (item: any) => {
      console.log(item)

      const leafKeys = getMenuLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef, handleNewData, handleEditData, defaultInfo] =
      usePageModal(undefined, editCallBack) as any
    const menus = computed(() => store.state.entireMenu)
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      contentTableConfig,
      searchFormConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      modalConfig,
      pageModalRef,
      handleNewData,
      handleEditData,
      defaultInfo,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 20px;
}
</style>
