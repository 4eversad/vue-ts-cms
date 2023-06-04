<template>
  <div class="page-content">
    <FTTable
      :listData="userList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button v-if="isCreate" type="primary" size="default" icon="plus"
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
          <el-button
            v-if="isUpdate"
            size="small"
            type="primary"
            link
            icon="edit"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            size="small"
            type="danger"
            link
            icon="remove"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 动态插槽 -->
      <template
        v-for="item in otherPropsSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </FTTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { formatTime } from '@/utils/formatTime'
import FTTable from '@/base-ui/table'
import { usePermission } from '@/hooks/usePermission'

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

    // 获取操作权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'uodate')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

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
    // 查询-发送网络请求
    const getPageData = (query: any = {}) => {
      if (!isQuery) return
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
    // 4.获取其他动态插槽名称
    const otherPropsSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    return {
      formatTime,
      userList,
      dataCount,
      getPageData,
      pageInfo,
      otherPropsSlots,
      isCreate,
      isUpdate,
      isDelete
    }
  }
})
</script>
<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.el-image-viewer__canvas {
  z-index: 10;
}
</style>
