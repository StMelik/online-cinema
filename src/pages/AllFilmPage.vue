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
          <img class="item-films__image" :src="film.imageUrl" :alt="film.title">
          <div class="item-films__rating">{{ film.rating }}</div>
          <p class="item-films__title">{{ film.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      films: [
        {
          id: 1,
          imageUrl: 'https://api.kinoart.ru/storage/post/1492/regular_detail_picture-542c58ab285d5c980aab93d222acdede.jpg',
          rating: 8.5,
          title: 'Джентельмены'
        },
        {
          id: 2,
          imageUrl: 'https://itc.ua/wp-content/uploads/2021/12/3-6.jpg',
          rating: 8.1,
          title: 'Человек-паук 3: Нет пути домой'
        },
        {
          id: 3,
          imageUrl: 'https://thumbs.dfs.ivi.ru/storage26/contents/1/0/4eab3e3f265eb29505f5d643b966d8.jpg',
          rating: 7.8,
          title: 'Круэлла'
        },
        {
          id: 4,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbK3279sFpD7JVLLe-Eg-wudGMLGf7t_nlSQ&usqp=CAU',
          rating: 8.8,
          title: 'Железный человек 2'
        },
        {
          id: 5,
          imageUrl: 'https://s.afisha.ru/mediastorage/51/99/e890934d66fa49eba4579d359951.jpg',
          rating: 7.5,
          title: 'Время (2011)'
        },
        {
          id: 6,
          imageUrl: 'https://kto-ozvuchivaet.ru/wp-content/uploads/2021/08/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B3%D0%B5%D1%80%D0%BE%D0%B9-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-2021.jpg',
          rating: 8.5,
          title: 'Главный герой'
        },
      ]
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
  transition: all .3s;
}

.item-films:hover {
  transform: scale(1.03);
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