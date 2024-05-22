<script setup lang="ts">
import users from '@/assets/data/user.json'
import { computed } from 'vue'
</script>

<template>
  <n-p>参赛人数：{{ users.length }}</n-p>
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
