import { ref } from 'vue'
import { defineStore } from 'pinia'
import recordJson from '@/assets/json/record.json'

type Record = {
  datetime: string
  score: {
    win: string
    lose: string
  }
  win: string[]
  lose: string[]
}

export const useRecordStore = defineStore('record', () => {
  const recordData = ref<Record[]>(recordJson)
  return { recordData }
})
