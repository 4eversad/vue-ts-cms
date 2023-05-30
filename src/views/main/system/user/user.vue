<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <div class="content">
      <FTTable :listData="userList" :propList="propList">
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
      </FTTable>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'
import FTTable from '@/base-ui/table'
import { formatTime } from '@/utils/formatTime'
export default defineComponent({
  name: 'user',
  components: { pageSearch, FTTable },
  setup() {
    const store = useStore()
    const userList = computed(() => store.state.systemModule.userList)
    const userCount = computed(() => store.state.systemModule.userCount)
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '电话号码', minWidth: '100' },
      {
        prop: 'enable',
        label: '用户状态',
        minWidth: '100',
        slotName: 'status'
      },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '100',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '100',
        slotName: 'updateAt'
      }
    ]
    store.dispatch('systemModule/getPageListAction', {
      pageUrl: 'users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    return { searchFormConfig, userList, formatTime, userCount, propList }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
