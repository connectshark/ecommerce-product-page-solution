<template>
<div class="modal-bg" v-bind="attrs">
  <div class="modal-container" @click.stop>
    <div class="handle-bar">
      <slot/>
    </div>
    <div class="cover-bar">
      <figure>
        <img :src="nowItem.cover" alt="cover">
      </figure>
        <button type="button" class="gallery-btn" @click="goNext">
          <i class='bx bx-chevron-right bx-md'></i>
        </button>
        <button type="button" class="gallery-btn" @click="goPrev">
          <i class='bx bx-chevron-right bx-rotate-180 bx-md' ></i>
        </button>
    </div>
    <ul class="nav-bar">
      <li class="nav-item" v-for="(item, index) in props.productList"
        :class="{ 'active-item': nowIndex === index }"
      >
        <button type="button" @click="goTarget(index)">
          <img :src="item.thumbnail" alt="thumbnail">
        </button>
      </li>
    </ul>
  </div>
</div>
</template>

<script setup>
import { useAttrs } from 'vue'
import useGallery from '../composables/useGallery'
const attrs = useAttrs()

const props = defineProps({
  productList: Array
})

const {
  nowIndex,
  nowItem,
  goTarget,
  goNext,
  goPrev
} = useGallery(props.productList)
</script>

<script>
export default {
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
@import '../assets/css/modal.scss';
</style>