<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useRecordStore } from '@/stores/record'
import type { MentionOption } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

// store
const userStore = useUserStore()
const recordStore = useRecordStore()

type Record = {
  datetime: string
  score: {
    win: string
    lose: string
  }
  win: string[]
  lose: string[]
}

// search
const searchValue = ref('')
const searchSW = computed(() => {
  return searchValue.value.slice(
    searchValue.value.indexOf('#') + 1,
    searchValue.value.indexOf('#') + 18
  )
})
const nameOptions = userStore.userData.map(item => {
  return {
    label: item.name,
    value: item.name + '#' + item.sw
  }
})
const swOptions = userStore.userData.map(item => {
  return {
    label: item.sw,
    value: item.sw + '@' + item.name
  }
})
const optionsRef = ref<MentionOption[]>([])
function handleSearch(_: string, prefix: string) {
  if (prefix === '@') {
    optionsRef.value = nameOptions
  } else {
    optionsRef.value = swOptions
  }
}

// list
const recordData = computed(() => {
  return recordStore.recordData
    .filter(item => {
      return (
        item.win.includes(searchSW.value) || item.lose.includes(searchSW.value)
      )
    })
    .map(item => {
      return {
        result: item.win.includes(searchSW.value) ? 'win' : 'lose',
        ...item
      }
    })
})

function swname(sw: string) {
  return userStore.userData.find(item => item.sw === sw)?.name
}

const showModal = ref(false)
const searchData = ref<Record>()

function showModalFun(data: Record) {
  searchData.value = data
  showModal.value = true
}
</script>

<template>
  <n-p>输入@通过游戏名称查询，输入#通过sw码查询</n-p>
  <n-mention
    :options="optionsRef"
    size="large"
    :prefix="['@', '#']"
    @search="handleSearch"
    v-model:value="searchValue"
    clearable
  />

  <n-p
    >胜率统计：{{
      recordData.filter(e => e?.result === 'win').length +
      '/' +
      recordData.length
    }}</n-p
  >

  <n-list bordered hoverable clickable>
    <n-list-item v-for="item in recordData" @click="showModalFun(item)">
      <div style="display: flex; justify-content: space-between">
        <n-tag
          :bordered="false"
          :type="item.result === 'win' ? 'success' : undefined"
          size="small"
        >
          {{ item.result === 'win' ? 'WIN!' : 'LOSE...' }}
        </n-tag>

        <div>{{ item.datetime }}</div>
      </div>
    </n-list-item>
  </n-list>

  <n-modal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    title="对战详情"
    :bordered="false"
  >
    <n-h3>WIN!</n-h3>
    <n-list bordered hoverable clickable>
      <n-list-item v-for="item in searchData?.win">
        <div style="display: flex; justify-content: space-between">
          <span>
            {{ swname(item) }}
          </span>
          <span v-if="item === searchSW"> 👈 </span>
        </div>
      </n-list-item>
    </n-list>

    <n-h3>LOSE...</n-h3>
    <n-list bordered hoverable clickable>
      <n-list-item v-for="item in searchData?.lose">
        <div style="display: flex; justify-content: space-between">
          <span>
            {{ swname(item) }}
          </span>
          <span v-if="item === searchSW"> 👈 </span>
        </div>
      </n-list-item>
    </n-list>
  </n-modal>
</template>

<style scoped></style>
