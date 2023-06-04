<template>
  <div class="ft-table">
    <div class="table-header">
      <slot name="tableHeader">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      @selection-change="handleSelectionChange"
      style="width: 100%"
      v-bind="childrenProps"
    >
      <!-- 是否要选中列 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
      ></el-table-column>
      <!-- 是否要需要列 -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        min-width="80"
      >
        <!-- 表格内容 -->
      </el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column
          v-bind="propItem"
          align="center"
          :min-width="propItem.minWidth"
          show-overflow-tooltip
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="table-footer" v-if="ShowFooter">
      <slot name="tableFooter">
        <el-pagination
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array as any
      // required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: true
    },
    showSelectColumn: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    listCount: {
      type: Number,
      default: 0
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    ShowFooter: {
      type: Boolean,
      default: true
    }
  },
  emitd: ['selectionChange'],
  setup(props, { emit }) {
    console.log(props.ShowFooter)

    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    // 当前页改变
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    // 选择每页条数范围
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>
<style lang="less" scoped>
.table-header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
}
.handler {
  align-items: center;
}
.table-footer {
  margin-top: 15px;
}
::v-deep(.el-pagination) {
  justify-content: center;
  padding-bottom: 20px;
}
</style>
