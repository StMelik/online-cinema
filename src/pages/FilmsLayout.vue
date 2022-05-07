<template>
  <div class="films-layout">
    <MainHeader/>
    <router-view></router-view>
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