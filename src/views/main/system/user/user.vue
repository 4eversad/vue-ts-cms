<template>
  <div class="user">
    <pageSearch
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>
    <pageContent
      ref="pageContentRef"
      pageName="user"
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
import { usePageSearch } from '@/hooks/usePageSearch'
export default defineComponent({
  name: 'user',
  components: { pageSearch, pageContent },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch() as any

    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped></style>
