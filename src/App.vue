<script setup lang="ts">
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'
import { RouterView } from 'vue-router'

import { Sunny as SunnyIcon } from '@vicons/ionicons5'

import MenuComponent from './components/MenuComponent.vue'
import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'

const theme = ref<undefined | BuiltInGlobalTheme>(darkTheme)

function setTheme() {
  if (theme.value === undefined) {
    theme.value = darkTheme
  } else {
    theme.value = undefined
  }
}
</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout style="height: 100vh">
      <n-layout-header
        style="
          height: 64px;
          padding: 0 24px;
          display: flex;
          align-items: center;
        "
        bordered
      >
        <MenuComponent />
      </n-layout-header>

      <n-layout
        position="absolute"
        style="top: 64px; bottom: 64px"
        content-style="padding: 24px 24px 64px 24px;"
        :native-scrollbar="false"
      >
        <RouterView />
        <n-float-button
          style="z-index: 999"
          :right="10"
          :bottom="74"
          type="primary"
          @click="setTheme"
        >
          <n-icon>
            <sunny-icon />
          </n-icon>
        </n-float-button>
      </n-layout>

      <n-layout-footer
        position="absolute"
        style="
          height: 64px;
          display: flex;
          align-items: center;
          padding: 0 24px;
        "
        bordered
      >
        最终解释权归小白所有
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style scoped></style>
