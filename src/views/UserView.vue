<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import type { DataTableColumns } from 'naive-ui'

// store
const UserStore = useUserStore()

type User = {
  sw: string
  name: string
  nickname?: string
}

// column
const createColumns = (): DataTableColumns<User> => {
  return [
    {
      title: '玩家名称&昵称',
      key: 'name'
    },
    {
      title: 'SW',
      key: 'sw'
    }
  ]
}
const columns = createColumns()

// data
const emojis = ['🦑', '🐙']
const userData = UserStore.userData.map(item => {
  const emoji = emojis[Math.floor(Math.random() * 2)]
  return {
    sw: item.sw,
    name: item.name + (item.nickname ? ` ${emoji + item.nickname}` : '')
  }
})
</script>

<template>
  <n-alert title="注意" type="warning">
    游戏名称为《斯普拉遁3》游戏内的昵称，请仔细检查游戏名称是否存在错误，这会影响到对局结算计分。
  </n-alert>
  <n-p
    >参赛总人数：<span style="font-size: 24px">{{ userData.length }}</span
    >人</n-p
  >
  <n-data-table
    :columns="columns"
    :data="userData"
    :bordered="false"
    :single-line="false"
    :scroll-x="400"
  />
</template>

<style scoped></style>
