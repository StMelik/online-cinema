<template>
  <div class="container">
    <div class="main-page">
      <h1 class="main-title">Онлайн кинотеатр</h1>
      <button class="button" @click="$router.push({name: 'films'})">Перейти к фильмам</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.main-title {
  font-size: 72px;
  text-align: center;
  margin-bottom: 35px;
}
</style>