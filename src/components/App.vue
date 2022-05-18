<template>
  <router-view></router-view>
</template>

<script>

export default {}
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

h1,
h2,
p {
  margin: 0;
}

img {
  width: 100%;
  display: block;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
}

.button {
  font-size: 16px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: transparent;
  color: #eeeeee;
  padding: 10px;
  cursor: pointer;
  transition: all .3s;
}

.button:hover {
  background-color: #eeeeee;
  color: #111111;
}
</style>