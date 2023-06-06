<template>
  <div class="role">
    <pageSearch
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>
    <pageContent
      :contentTableConfig="contentTableConfig"
      ref="pageContentRef"
      pageName="role"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'
import pageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'role',
  components: { pageContent, pageSearch },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch() as any
    return {
      contentTableConfig,
      searchFormConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped></style>
