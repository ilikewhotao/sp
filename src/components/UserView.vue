<script setup lang="ts">
import users from '@/assets/data/user.json'
import { computed } from 'vue'
</script>

<template>
  <n-alert title="注意" type="warning">
    昵称为《斯普拉遁3》游戏内的昵称，请仔细检查昵称是否存在错误，这会影响到对局结算计分。
  </n-alert>
  <n-p
    >参赛总人数：<span style="font-size: 24px">{{ users.length }}</span
    >人</n-p
  >
  <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th>SW码</th>
        <th>昵称</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users">
        <td>SW{{ user.sw.replace(/(.{4})/g, '-$1') }}</td>
        <td>{{ user.name }}</td>
      </tr>
    </tbody>
  </n-table>
</template>

<style scoped></style>
