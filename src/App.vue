<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HomeView from '@/components/HomeView.vue'
import UserView from '@/components/UserView.vue'

const tabs = ref([
  {
    name: 'home',
    title: '🏆小白杯'
  },
  {
    name: 'user',
    title: '👨‍👨‍👧‍👧参赛人员'
  },
  {
    name: 'record',
    title: '📰战绩查询'
  },
  {
    name: 'result',
    title: '💐结果公示'
  }
])

const currentTab = ref('home')
</script>

<template>
  <n-layout>
    <n-layout-header
      style="height: 64px; padding: 0 24px; display: flex; align-items: center"
      bordered
    >
      <n-tabs type="bar" animated>
        <n-tab
          v-for="item in tabs"
          :name="item.name"
          @click="currentTab = item.name"
        >
          {{ item.title }}
        </n-tab>
      </n-tabs>
    </n-layout-header>

    <n-layout
      content-style="padding: 24px;"
      :native-scrollbar="false"
      position="absolute"
      style="top: 64px; bottom: 64px"
    >
      <n-tabs
        type="line"
        animated
        class="tab_hidden"
        v-model:value="currentTab"
      >
        <n-tab-pane name="home">
          <HomeView></HomeView>
        </n-tab-pane>
   

        <n-tab-pane name="user"> <UserView></UserView> </n-tab-pane>

        <n-tab-pane name="record" tab="对战详情">
          <n-input placeholder="请输入SW码查询战绩"></n-input>
        </n-tab-pane>
        <n-tab-pane name="result"> 待开发 </n-tab-pane>
      </n-tabs>
    </n-layout>

    <n-layout-footer
      position="absolute"
      style="height: 64px; padding: 0 24px; display: flex; align-items: center"
      bordered
    >
      最终解释权归小白所有
    </n-layout-footer>
  </n-layout>
</template>

<style>
.tab_hidden .n-tabs-nav {
  display: none;
}
</style>
