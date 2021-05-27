<template>
  <el-container class="home">
    <el-header class="header" height="35px">
      <head-top></head-top>
    </el-header>
    <el-main class="main">
      <div class="search">
        <img src="../../assets/img/logo.png" alt="图片无法显示" />
        <el-input
          v-model="input"
          placeholder="请输入关键字查询"
          class="search-input"
        ></el-input>
        <el-button class="btn">搜索</el-button>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="pink"
        text-color="#fff"
      >
        <el-menu-item index="1" class="menu-item">
          <router-link :to="{ name: 'about' }" class="router">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2" class="menu-item">
          <router-link :to="{ name: 'center' }" class="router">月子中心</router-link>
        </el-menu-item>
        <el-menu-item index="3" class="menu-item">
          <router-link :to="{ name: 'education' }" class="router">孕育知识</router-link>
        </el-menu-item>
        <el-menu-item index="4" class="menu-item">
          <router-link :to="{ name: 'discuss' }" class="router">交流社区</router-link>
        </el-menu-item>
      </el-menu>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      activeIndex: "1",
    };
  },
  methods: {},
};
</script>

<style scoped>
.header {
  padding: 0;
}

.main {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  /* background-color: aquamarine; */
}
.search {
  width: 1400px;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  /* background-color: aquamarine; */
}
.search-row {
  width: 500px;
}
.search .search-input {
  right: 260px;
}
.search .btn {
  position: absolute;
  right: 160px;
  width: 100px;
  background-color: pink;
  color: #fff;
}
.el-menu-demo {
  padding-left: 180px;
}
.el-menu-demo .menu-item {
  font-size: 18px;
  padding: 0;
}

.router {
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0 20px;
}
</style>