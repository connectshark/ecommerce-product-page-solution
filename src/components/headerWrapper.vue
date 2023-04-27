<template>
<header>
  <div class="container">
    <button type="button" class="menu-btn btn" @click.stop="isModal = !isModal">
      <i class='bx bx-menu bx-sm'></i>
    </button>
    <router-link to="/">
      <img src="../assets/logo.svg" alt="logo">
    </router-link>
      <nav class="menu" :class="{ 'active': isModal }">
        <button type="button" class="btn close-btn" @click.stop="isModal = !isModal">
          <i class='bx bx-x bx-sm'></i>
        </button>
        <ul class="nav-list">
          <li class="nav-item" v-for="nav in navs">
            <a href="javascript:;">{{ nav.name }}</a>
          </li>
        </ul>
      </nav>
    <button type="button" class=" cart-btn btn">
      <i class='bx bx-cart-alt bx-sm'></i>
    </button>
    <button type="button" class="avatar-btn btn">
      <img class="avatar" src="../assets/image-avatar.png" alt="user avatar">
    </button>
  </div>
</header>
</template>

<script setup>
import { ref } from 'vue'

const isModal = ref(false)
const navs = [
  {
    name: 'Collections'
  },
  {
    name: 'Men'
  },
  {
    name: 'Women'
  },
  {
    name: 'About'
  },
  {
    name: 'Contact'
  }
]
</script>

<style scoped lang="scss">
.btn {
  width: 1.5rem;
  i {
    vertical-align: middle;
  }
}
img {
  width: 100%;
}
header{
  .container {
    padding: 2rem 1rem;
    max-width: 1080px;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
.menu-btn {
  display: none;
}
.cart-btn {
  margin-left: auto;
}
.nav-list {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-item a {
  color: var(--neutral-dark-grayish-blue);
}
.close-btn{
  display: none;
}
.avatar-btn {
  width: 3rem;
}
@media screen and (max-width: 768px) {
  .avatar-btn {
    width: 1.5rem;
  }
  .menu-btn {
    display: block;
  }
  .menu {
    position: fixed;
    z-index: 10;
    inset: 0;
    height: 100vh;
    backdrop-filter: blur(10px);
    background-color: #000000aa;
    display: none;
  }
  .active {
    display: block;
  }
  .nav-list {
    background-color: #fff;
    width: 70%;
    max-width: 350px;
    height: 100%;
    padding: 6rem 2rem 0 2rem;
    box-sizing: border-box;
    display: block;
  }
  .close-btn {
    display: block;
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
  .nav-item {
    a {
      font-weight: var(--font-bold);
      line-height: 3;
      color: var(--neutral-very-dark-blue);
    }
  }
}



</style>