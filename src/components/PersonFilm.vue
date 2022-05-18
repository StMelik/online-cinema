<template>
  <li class="person-film">
    <img class="person-film__avatar" :src="person.posterUrl" :alt="person.nameRu || person.nameEn">
    <p class="person-film__name">{{ person.nameRu || person.nameEn }}</p>
  </li>
</template>

<script>
export default {
  props: {
    person: Object,
  },
}
</script>

<style scoped>
.person-film {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  max-width: 125px;
}

.person-film__avatar {
  object-fit: cover;
  object-position: center;
}

.person-film__name {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8px;
  background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 80%);
  font-size: 16px;
}
</style>