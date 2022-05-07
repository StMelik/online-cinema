<template>
  <div class="films-layout">
    <MainHeader/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
export default {
  components: {MainHeader}
}
</script>

<style scoped>

</style>