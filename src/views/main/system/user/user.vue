<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import pageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: { pageSearch },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { searchFormConfig, formData }
  }
})
</script>

<style scoped></style>
