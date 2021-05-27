<template>
  <div class="head-top">
    <div class="left">
      <div class="item">官方微信</div>
      <div class="item">小程序</div>
      <div class="item">手机版</div>
    </div>
    <div class="center"></div>
    <div class="right">
      <router-link to="/login" class="item">登录</router-link>
      <router-link to="/register" class="item">注册</router-link>
      <router-link to="/help" class="item">帮助中心</router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.head-top{
  width: 100%;
  height: 35px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
}

.left{
  margin-left: 200px;
  flex-grow: 1;
  display: flex;
  justify-items: center;
  align-items: center;
}

.center{
  flex-grow: 2;

}
.right{
  display: flex;
  margin-right: 150px;
  flex-grow: 1;
  justify-items: center;
  align-items: center;
}
.item{
  text-decoration: none;
}
.right .item,.left .item{
  margin: 10px;
  color: #222;
  cursor: pointer;
}

.right .item:hover,.left .item:hover{
  color: #f40;
}
</style>