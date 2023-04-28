<template>
  <HeaderWrapper/>
  <main>
    <div class="container">
      <div class="gallery">
        <figure class="figure">
          <img @click="modal = true" :key="nowItem.name" :src="nowItem.cover" alt="product">
          <button type="button" class="gallery-btn" @click.stop="goNext">
            <i class='bx bx-chevron-right bx-md'></i>
          </button>
          <button type="button" class="gallery-btn" @click.stop="goPrev">
            <i class='bx bx-chevron-right bx-rotate-180 bx-md' ></i>
          </button>
        </figure>
        <div class="slider">
          <button v-for="(item, index) in productList" @click="goTarget(index)" type="button"
            :class="{ 'active': nowIndex === index }"
          >
            <img :src="item.thumbnail" alt="thumbnail">
          </button>
        </div>
      </div>
      <section class="product">
        <h2>Sneaker Company</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div class="price-form">
          <div class="info-bar">
            <p class="price">$125.00</p>
            <p class="percent">50%</p>
            <p class="origin-price">$250.00</p>
          </div>
          <div class="row-bar">
            <div class="count-bar">
              <button type="button" @click="minusPrice">
                <i class='bx bx-minus'></i>
              </button>
              <span>{{ amount }}</span>
              <button type="button" @click="amount++">
                <i class='bx bx-plus'></i>
              </button>
            </div>
            <div class="submit-bar">
              <button type="submit" @click="submitHandler">
                <i class='bx bx-cart-alt bx-sm'></i>
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
<Teleport to="#modal">
  <Modal
    v-if="modal"
    @click="modal = false"
    :productList="productList"
  >
    <button class="modal-btn" @click="modal = false">
      <i class='bx bx-x bx-md'></i>
    </button>
  </Modal>
</Teleport>
</template>


<script setup>
import { ref } from 'vue'
import HeaderWrapper from '../components/headerWrapper.vue'
import { useCartStore } from '../store/cart'
import useGallery from '../composables/useGallery'
import Modal from '../components/modal.vue'
const store = useCartStore()
const amount = ref(0)
const modal = ref(false)

const minusPrice = () => {
  if (amount.value <= 0) return
  amount.value--
}

const submitHandler = async () => {
  if (amount.value > 0) {
    store.addCard({
      name: 'Fall Limited Edition Sneakers',
      icon: 'product/image-product-1-thumbnail.jpg',
      price: 125,
      amount: amount.value,
    })
  }
}
const productList = [
  {
    name: 'image-product-1',
    cover: 'product/image-product-1.jpg',
    thumbnail: 'product/image-product-1-thumbnail.jpg'
  },
  {
    name: 'image-product-2',
    cover: 'product/image-product-2.jpg',
    thumbnail: 'product/image-product-2-thumbnail.jpg'
  },
  {
    name: 'image-product-3',
    cover: 'product/image-product-3.jpg',
    thumbnail: 'product/image-product-3-thumbnail.jpg'
  },
  {
    name: 'image-product-4',
    cover: 'product/image-product-4.jpg',
    thumbnail: 'product/image-product-4-thumbnail.jpg'
  }
]
const {
  nowItem,
  goNext,
  goPrev,
  goTarget,
  nowIndex
} = useGallery(productList)
</script>

<style scoped lang="scss">
.figure {
  position: relative;
  .gallery-btn {
    background-color: #fff;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1rem;
    margin: auto 0;
    &:last-child {
      right: auto;
      left: 1rem;
    }
  }
}
.slider {
  display: none;
}
.product {
  padding: 1rem;
  h2 {
    color: var(--primary-orange);
    text-transform: uppercase;
    font-weight: var(--font-bold);
    line-height: 2;
  }
  h1 {
    font-weight: var(--font-bold);
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  >p {
    color: var(--neutral-dark-grayish-blue);
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
}

.info-bar {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  margin-bottom: 1rem;
  .price {
    font-weight: var(--font-bold);
    font-size: 1.5rem;
  }
  .percent {
    background-color: var(--primary-pale-orange);
    color: var(--primary-orange);
    font-weight: var(--font-bold);
    display: inline-block;
    border-radius: .5rem;
    padding: .2rem;
    margin-left: .5rem;
    box-sizing: border-box;
  }
  .origin-price {
    text-decoration: line-through;
    color: var(--neutral-grayish-blue);
    margin-left: auto;
  }
}
.count-bar {
  background-color: var(--neutral-light-grayish-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  font-weight: var(--font-bold);
  margin-bottom: 1rem;
    border-radius: .5rem;
  button {
    width: 3rem;
    height: 3rem;
    color: var(--primary-orange);
    &:hover {
      opacity: .8;
    }
    i {
      vertical-align: middle;
    }
  }
}
.submit-bar {
  button {
    background-color: var(--primary-orange);
    color: #fff;
    width: 100%;
    border-radius: .5rem;
    font-weight: var(--font-bold);
    box-shadow: 0 25px 50px -12px var(--primary-orange);
    &:hover {
      opacity: .8;
    }
    i {
      vertical-align: middle;
    }
    span {
      margin-left: .5rem;
      line-height: 3rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 900px;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 0;
  }
  .gallery {
    width: 45%
  }
  .product {
    width: 40%;
    h2 {
      line-height: 4;
    }
  }
  .figure {
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 2rem;
    img {
      cursor: pointer;
    }
    .gallery-btn {
      display: none;
    }
  }
  .slider {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    button {
      border-radius: 1rem;
      overflow: hidden;
      width: 20%;
      border: 2px solid transparent;
      &:hover {
        opacity: .8;
      }
    }
    button.active {
      border: 2px solid var(--primary-orange);
      opacity: .7;
    }
  }
  .origin-price {
    width: 100%;
  }
  .row-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .count-bar {
      width: 38%;
      margin-bottom: 0;
    }
    .submit-bar {
      width: 58%;
    }
  }
}

button.modal-btn {
  color: white;
  &:hover {
    color: var(--primary-orange);
  }
}
</style>