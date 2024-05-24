<script setup lang="ts">
import { useRouterStore } from '@/stores/router'
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// router
const router = useRouter()

// store
const routerStore = useRouterStore()
const { routerName } = storeToRefs(routerStore)

const menu = [
  { key: 'home', title: '🏆小白杯' },
  { key: 'user', title: '参赛人员' },
  { key: 'record', title: '对局查询' },
  { key: 'result', title: '结果公示' }
]

function editRouter(value: string) {
  router.push({ name: value })
}
</script>

<template>
  <n-tabs type="bar" v-model:value="routerName" @update:value="editRouter" animated>
    <n-tab v-for="item in menu" :name="item.key"> {{ item.title }} </n-tab>
  </n-tabs>
</template>
