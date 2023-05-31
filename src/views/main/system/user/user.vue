<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <pageContent
      :pageName="pageName"
      :contentTableConfig="contentTableConfig"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
export default defineComponent({
  name: 'user',
  components: { pageSearch, pageContent },
  setup() {
    const pageName = 'user'
    return {
      searchFormConfig,
      contentTableConfig,
      pageName
    }
  }
})
</script>

<style scoped></style>
