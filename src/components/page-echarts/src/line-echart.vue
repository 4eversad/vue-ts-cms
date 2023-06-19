<template>
  <div class="line-ecahrt">
    <BaseEchart :options="options"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from '@/base-ui/echart'
import { computed, defineProps, withDefaults } from 'vue'
const props = withDefaults(
  defineProps<{
    title?: string
    xLabels: string[]
    values: any[]
  }>(),
  {
    title: ''
  }
)
const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xLabels
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '分类销量',
        stack: '总量',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.values
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    }
  }
})
</script>
<style lang="less" scoped></style>
