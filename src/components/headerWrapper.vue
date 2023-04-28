<template>
<header>
  <div class="container">
    <div class="pop-panel" v-show="isCart">
      <p class="panel-title">Cart</p>
      <div v-if="store.cartList.length > 0">
        <div class="panel-detail" v-for="(item, index) in store.cartList" :key="item.name">
          <figure class=" panel-icon">
            <img :src="item.icon" alt="icon">
          </figure>
          <div>
            <p class=" panel-subtitle">{{ item.name }}</p>
            <p class="panel-price">${{ item.price }}.00<i class='bx bx-x'></i>{{ item.amount }} <span class="highlight">${{ item.price * item.amount }}.00</span></p>
          </div>
          <button type="button" @click="store.removeItemFromCart(index)" class=" delete-btn">
            <i class='bx bx-trash bx-sm'></i>
          </button>
        </div>
        <div class=" panel-handler">
          <div class="submit-bar">
            <button type="submit">Checkout</button>
          </div>
        </div>
      </div>
      <div class="panel-empty" v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
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
    <button type="button" @click="isCart = !isCart" class=" cart-btn btn">
      <span v-if="store.cartList.length > 0" class="cart-count">{{ store.cartList.length }}</span>
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
import { useCartStore } from '../store/cart'


const store = useCartStore()

const isCart = ref(false)

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
    border-bottom: 2px solid var(--neutral-light-grayish-blue);
    padding: 0 1rem;
    max-width: 1080px;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
  }
}
.menu-btn {
  display: none;
}
.menu {
  margin-left: 2rem;
}
.cart-btn {
  margin-left: auto;
  position: relative;
  .cart-count {
    background-color: var(--primary-orange);
    color: #fff;
    position: absolute;
    width: 1.5rem;
    border-radius: .5rem;
    top: -.5rem;
    right: -.5rem;
  }
}
.nav-list {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-item {
  a {
    display: block;
    line-height: 6rem;
    color: var(--neutral-dark-grayish-blue);
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid var(--primary-orange);
    }
  }
}
.close-btn{
  display: none;
}
.avatar-btn {
  width: 3rem;
  border: 2px solid transparent;
  border-radius: 50%;
  &:hover {
    border: 2px solid var(--primary-orange);
  }
}
.pop-panel {
  position: absolute;
  z-index: 5;
  background-color: #fff;
  right: 2%;
  top: 80%;
  border-radius: .5rem;
  width: 400px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  .panel-title {
    border-bottom: 2px solid var(--neutral-light-grayish-blue);
    line-height: 2rem;
    font-weight: var(--font-bold);
    padding: 1rem 1rem;
  }
  .panel-detail {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .panel-icon {
    width: 4rem;
    border-radius: .5rem;
    overflow: hidden;
  }
  .panel-subtitle {
    color: var(--neutral-dark-grayish-blue);
    line-height: 1.5;
  }
  .panel-price {
    line-height: 1.5;
    color: var(--neutral-dark-grayish-blue);
    .highlight {
      color: var(--neutral-very-dark-blue);
      font-weight: var(--font-bold);
    }
  }
  .delete-btn {
    margin-left: auto;
    color: var(--neutral-dark-grayish-blue);
  }
  .panel-handler {
    padding: 1rem;
    .submit-bar {
      button {
        background-color: var(--primary-orange);
        color: #fff;
        width: 100%;
        border-radius: .5rem;
        font-weight: var(--font-bold);
        line-height: 3rem;
        &:hover {
          opacity: .8;
        }
      }
    }
  }
  .panel-empty {
    text-align: center;
    line-height: 10rem;
  }
}
@media screen and (max-width: 768px) {
  header .container {
    padding: 1rem;
  }
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
    margin-left: 0;
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
  .pop-panel {
    right: 5%;
    top: 120%;
    width: 90%;
  }
}



</style>