<template>
  <div class="menu">
    <pageContent
      pageName="menu"
      :contentTableConfig="contentTableConfig"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './content.config'

export default defineComponent({
  name: 'menus',
  components: { pageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
