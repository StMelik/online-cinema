<template>
  <div>
    <MainPage/>
  </div>
</template>

<script>
import MainPage from "@/components/MainPage";
export default {
  components: {MainPage}
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #111111;
  color: #eeeeee;
  font-family: "Roboto";
  margin: 0;
}

h1 {
  margin: 0;
}

.container {
  max-width: 1140px;
  padding: 0 15px;
}

.button {
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: transparent;
  color: #eeeeee;
  padding: 10px;
  cursor: pointer;
}
</style>