<script setup lang="ts">
import users from '@/assets/data/user.json'
import type { DataTableColumns } from 'naive-ui'
import { isTemplateSpan } from 'typescript'

type User = {
  sw: string
  name: string
  nickname: string
}

const createColumns = (): DataTableColumns<User> => {
  return [
    {
      title: '游戏名称',
      key: 'name'
    },
    {
      title: 'SW',
      key: 'sw'
    }
  ]
}

const emojis = ['🦑', '🐙']

const columns = createColumns()
const userData = users.map((item) => {
  const emoji = emojis[Math.floor(Math.random() * 2)]
  return {
    sw: item.sw,
    name: item.name + (item.nickname ? ` ${emoji + item.nickname}` : '')
  }
})
</script>

<template>
  <n-alert title="注意" type="warning">
    昵称为《斯普拉遁3》游戏内的昵称，请仔细检查昵称是否存在错误，这会影响到对局结算计分。
  </n-alert>
  <n-p
    >参赛总人数：<span style="font-size: 24px">{{ users.length }}</span
    >人</n-p
  >
  <n-data-table
    :columns="columns"
    :data="userData"
    :bordered="false"
    :scroll-x="400"
  />
</template>

<style scoped></style>
