import { ref } from 'vue'
import { defineStore } from 'pinia'
import userJson from '@/assets/json/user.json'

type User = {
  sw: string
  name: string
  nickname?: string
}

export const useUserStore = defineStore('user', () => {
  const userData = ref<User[]>(userJson)
  return { userData }
})
