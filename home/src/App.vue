<script setup lang="ts">
import { computed } from 'vue'
import { darkTheme } from 'naive-ui'
import { useDark, useToggle } from '@vueuse/core'
import slidesData from './slides.json';

const isHome = computed(() => !slidesData.map(
  (slide) => slide.path
).some(
  (path) => window.location.pathname.includes(path)
))
const isDark = useDark()
const toggleDark = useToggle(isDark)
const theme = computed(() => (isDark.value ? darkTheme : null))

</script>

<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <n-layout-header>
      <n-page-header v-if="isHome" style="margin-left: 20px; margin-right: 20px;">
        <template #title>
          <p>Dreamhunter's slides</p>
        </template>
        <template #extra>
          <n-space>
            <n-button text @click="toggleDark()">
              {{ isDark ? '浅色' : '深色' }}
            </n-button>
          </n-space>
        </template>
      </n-page-header>
    </n-layout-header>
    <div v-if="isHome" style="margin: 20px;">
      <n-grid :cols="3" :y-gap="20" :x-gap="20">
        <n-gi v-for="(slide, index) in slidesData" :key="index">
          <n-card tag="a" :href="`/${slide.path}`" target="_blank" :bordered="false" embedded :title="slide.title"
            style="height: 40vh;">
            <template #cover>
              <iframe :src="`/${slide.path}`" style="width: 100%; border: none; pointer-events: none;"></iframe>
            </template>
          </n-card>
        </n-gi>
      </n-grid>
    </div>
    <n-result style="margin: 20px;" v-else status="404" title="404 资源不存在">
    </n-result>
  </n-config-provider>
</template>

<style scoped>
a {
  text-decoration: none;
}

n-page-header {
  background-color: red !important;
}
</style>
