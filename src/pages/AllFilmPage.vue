<template>
  <div class="container">
    <div class="films-page">
      <h2 class="films-page__title">Выбери фильм на свой вкус</h2>
      <ul class="films-page__list">
        <li
            class="films-page__item item-films"
            v-for="film in films"
            :key="film.id"
        >
          <p class="item-films__more">Подробнее о фильме</p>
          <img class="item-films__image" :src="film.imageUrl" :alt="film.title">
          <div class="item-films__rating">{{ film.rating }}</div>
          <p class="item-films__title">{{ film.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {films} from "@/utils/films";

export default {
  data() {
    return {
      films
    }
  }
}
</script>

<style scoped>
.films-page {
  padding: 30px 0;
}

.films-page__title {
  margin-bottom: 30px;
  font-size: 32px;
}

.films-page__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.item-films {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
}

.item-films__more {
  position: absolute;
  display: flex;
  visibility: hidden;
  opacity: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.5);
  transition: all .3s;
}

.item-films:hover .item-films__more {
  visibility: visible;
  opacity: 1;
}

.item-films__image {
  object-fit: cover;
  object-position: center;
}

.item-films__rating {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 50, 50, 0.7);
  padding: 10px 15px;
  border-radius: 0 0 0 10px;
}

.item-films__title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%);
  font-size: 20px;
}
</style>