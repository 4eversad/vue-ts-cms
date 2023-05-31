<template>
  <div class="role">
    <pageSearch :searchFormConfig="searchFormConfig"></pageSearch>
    <pageContent
      :contentTableConfig="contentTableConfig"
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
export default defineComponent({
  name: 'role',
  components: { pageContent, pageSearch },
  setup() {
    return { contentTableConfig, searchFormConfig }
  }
})
</script>

<style scoped></style>
