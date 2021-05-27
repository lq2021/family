<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('./assets/css/reset.css');

@font-face {
  font-family: 'iconfont';
  src: url('./assets/font/iconfont.woff2?t=1621948307435') format('woff2'),
       url('./assets/font/iconfont.woff?t=1621948307435') format('woff'),
       url('./assets/font/iconfont.ttf?t=1621948307435') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
