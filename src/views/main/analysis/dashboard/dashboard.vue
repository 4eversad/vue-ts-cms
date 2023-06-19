<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <el-card>
          <template #header>分类商品数量(饼图)</template>
          <pieEchart :pieData="categoryGoodsCount"></pieEchart>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card>
          <template #header>不同城市商品销量</template>
          <mapEchart :mapData="addressGoodsSale"></mapEchart>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card>
          <template #header>分类商品数量(玫瑰图)</template>
          <roseEchart :roseData="categoryGoodsCount"></roseEchart>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <el-card>
          <template #header>分类商品的销量</template>
          <lineEchart v-bind="categoryGoodsSale"></lineEchart>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card>
          <template #header>分类商品的收藏</template>
          <barEchart v-bind="categoryGoodsFavor"></barEchart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import {
  pieEchart,
  roseEchart,
  lineEchart,
  barEchart,
  mapEchart
} from '@/components/page-echarts'

export default defineComponent({
  components: { pieEchart, roseEchart, lineEchart, barEchart, mapEchart },
  name: 'dashboard',
  setup() {
    const store = useStore()
    store.dispatch('dashboardModule/getDashboardDataAction')
    // 获取分类商品数量
    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    console.log(categoryGoodsCount)
    // 获取分类商品销量数据
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboardModule.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })
    // 获取商品收藏数据
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboardModule.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })
    console.log(categoryGoodsFavor)
    // 获取地图数据
    const addressGoodsSale = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })
    console.log(addressGoodsSale)

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
