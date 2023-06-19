<template>
  <div class="base-chart">
    <div ref="echartDivRef" :style="{ width: width, height: height }">123</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
const echartDivRef = ref<HTMLElement>()
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'
// 定义默认值
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  setOptions(props.options)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style lang="less" scoped></style>
