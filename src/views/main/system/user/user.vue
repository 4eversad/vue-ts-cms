<template>
  <div class="user">
    <div class="search">
      <FTForm v-bind="searchFormConfig"> </FTForm>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FTForm from '@/base-ui/form'
import { searchFormConfig } from './config/user.config'
export default defineComponent({
  name: 'user',
  components: { FTForm },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
