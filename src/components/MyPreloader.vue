<template>
  <div id="circularG">
    <div id="circularG_1" class="circularG"></div>
    <div id="circularG_2" class="circularG"></div>
    <div id="circularG_3" class="circularG"></div>
    <div id="circularG_4" class="circularG"></div>
    <div id="circularG_5" class="circularG"></div>
    <div id="circularG_6" class="circularG"></div>
    <div id="circularG_7" class="circularG"></div>
    <div id="circularG_8" class="circularG"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#circularG {
  position: relative;
  width: 195px;
  height: 195px;
  margin: auto;
}

.circularG {
  position: absolute;
  background-color: rgb(238, 238, 238);
  width: 46px;
  height: 46px;
  border-radius: 29px;
  -o-border-radius: 29px;
  -ms-border-radius: 29px;
  -webkit-border-radius: 29px;
  -moz-border-radius: 29px;
  animation-name: bounce_circularG;
  -o-animation-name: bounce_circularG;
  -ms-animation-name: bounce_circularG;
  -webkit-animation-name: bounce_circularG;
  -moz-animation-name: bounce_circularG;
  animation-duration: 0.818s;
  -o-animation-duration: 0.818s;
  -ms-animation-duration: 0.818s;
  -webkit-animation-duration: 0.818s;
  -moz-animation-duration: 0.818s;
  animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-direction: normal;
  -o-animation-direction: normal;
  -ms-animation-direction: normal;
  -webkit-animation-direction: normal;
  -moz-animation-direction: normal;
}

#circularG_1 {
  left: 0;
  top: 78px;
  animation-delay: 0.308s;
  -o-animation-delay: 0.308s;
  -ms-animation-delay: 0.308s;
  -webkit-animation-delay: 0.308s;
  -moz-animation-delay: 0.308s;
}

#circularG_2 {
  left: 20px;
  top: 20px;
  animation-delay: 0.404s;
  -o-animation-delay: 0.404s;
  -ms-animation-delay: 0.404s;
  -webkit-animation-delay: 0.404s;
  -moz-animation-delay: 0.404s;
}

#circularG_3 {
  top: 0;
  left: 78px;
  animation-delay: 0.51s;
  -o-animation-delay: 0.51s;
  -ms-animation-delay: 0.51s;
  -webkit-animation-delay: 0.51s;
  -moz-animation-delay: 0.51s;
}

#circularG_4 {
  right: 20px;
  top: 20px;
  animation-delay: 0.616s;
  -o-animation-delay: 0.616s;
  -ms-animation-delay: 0.616s;
  -webkit-animation-delay: 0.616s;
  -moz-animation-delay: 0.616s;
}

#circularG_5 {
  right: 0;
  top: 78px;
  animation-delay: 0.712s;
  -o-animation-delay: 0.712s;
  -ms-animation-delay: 0.712s;
  -webkit-animation-delay: 0.712s;
  -moz-animation-delay: 0.712s;
}

#circularG_6 {
  right: 20px;
  bottom: 20px;
  animation-delay: 0.818s;
  -o-animation-delay: 0.818s;
  -ms-animation-delay: 0.818s;
  -webkit-animation-delay: 0.818s;
  -moz-animation-delay: 0.818s;
}

#circularG_7 {
  left: 78px;
  bottom: 0;
  animation-delay: 0.914s;
  -o-animation-delay: 0.914s;
  -ms-animation-delay: 0.914s;
  -webkit-animation-delay: 0.914s;
  -moz-animation-delay: 0.914s;
}

#circularG_8 {
  left: 20px;
  bottom: 20px;
  animation-delay: 1.02s;
  -o-animation-delay: 1.02s;
  -ms-animation-delay: 1.02s;
  -webkit-animation-delay: 1.02s;
  -moz-animation-delay: 1.02s;
}


@keyframes bounce_circularG {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(.3);
  }
}

@-o-keyframes bounce_circularG {
  0% {
    -o-transform: scale(1);
  }

  100% {
    -o-transform: scale(.3);
  }
}

@-ms-keyframes bounce_circularG {
  0% {
    -ms-transform: scale(1);
  }

  100% {
    -ms-transform: scale(.3);
  }
}

@-webkit-keyframes bounce_circularG {
  0% {
    -webkit-transform: scale(1);
  }

  100% {
    -webkit-transform: scale(.3);
  }
}

@-moz-keyframes bounce_circularG {
  0% {
    -moz-transform: scale(1);
  }

  100% {
    -moz-transform: scale(.3);
  }
}
</style>