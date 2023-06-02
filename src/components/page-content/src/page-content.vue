<template>
  <div class="page-content">
    <FTTable
      :listData="userList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" size="default" icon="plus"
          >新建用户</el-button
        >
      </template>
      <template #status="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enabled ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span> {{ formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span> {{ formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handler-btns">
          <el-button size="small" type="primary" link icon="edit"
            >编辑</el-button
          >
          <el-button size="small" type="danger" link icon="remove"
            >删除</el-button
          >
        </div>
      </template>
    </FTTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { formatTime } from '@/utils/formatTime'
import FTTable from '@/base-ui/table'

import { useStore } from '@/store'
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: { FTTable },
  setup(props) {
    const store = useStore()
    const userList = computed(() =>
      store.getters['systemModule/pageListData'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['systemModule/pageListCount'](props.pageName)
    )
    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => {
      getPageData()
    })
    // 发送网络请求
    const getPageData = (query: any = {}) => {
      store.dispatch('systemModule/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...query
        }
      })
    }
    getPageData()

    return {
      formatTime,
      userList,
      dataCount,
      getPageData,
      pageInfo
    }
  }
})
</script>
<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
