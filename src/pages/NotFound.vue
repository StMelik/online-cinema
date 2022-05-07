<template>
  <div class="container">
    <div class="not-found">
      <div class="not-found__number">
        <p class="not-found__number-big">4</p>
        <p class="not-found__number-small">0</p>
        <p class="not-found__number-big">4</p>
      </div>
      <p class="not-found__text">Ничего не найдено</p>
      <router-link to="/" class="button not-found__button">Вернуться на главную</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.not-found__number {
  display: flex;
  column-gap: 10px;
  align-items: baseline;
}

.not-found__number-big {
  font-size: 160px;
  color: teal;
}

.not-found__number-small {
  font-size: 120px;
  color: #e15353;
}

.not-found__text {
  font-size: 48px;
  margin-bottom: 50px;
}

.not-found__button {
  text-decoration: none;
}
</style>