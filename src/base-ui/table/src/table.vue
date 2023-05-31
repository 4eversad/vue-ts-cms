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
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="table-footer">
      <slot name="tableFooter">
        <el-pagination
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
    }
  },
  emitd: ['selectionChange'],
  setup(props, { emit }) {
    const currentPage4 = ref(4)
    const pageSize4 = ref(4)
    console.log(props.propList)
    const handleSelectionChange = (value: any) => {
      console.log(value)
      emit('selectionChange', value)
    }

    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
    }

    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange,
      currentPage4,
      pageSize4
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
