import { computed, ref } from 'vue'

export default function (list = []) {
  const now = ref(0)

  const nowItem = computed(() => list[now.value])

  const goNext = () => {
    if (now.value >= list.length - 1) {
      now.value = 0
    } else {
      now.value++
    }
  }

  const goPrev = () => {
    if (now.value <= 0) {
      now.value = list.length - 1
    } else {
      now.value--
    }
  }

  const goTarget = value => {
    if (value > list.length - 1 || value < 0) return
    now.value = value
  }

  return {
    nowItem,
    nowIndex: now,
    goNext,
    goPrev,
    goTarget
  }
}