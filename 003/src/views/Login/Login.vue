<template>
  <el-container>
    <el-header class="header" height="100px">
      <i class="iconfont icon">&#xe61a;</i>
      <img src="../../assets/img/logo.png" alt="" />
    </el-header>
    <el-main class="main">
      <el-card class="card">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">密码登录</el-menu-item>
          <el-menu-item index="2">短信登录</el-menu-item>
        </el-menu>
        <el-form label-position="left" label-width="80px" :model="form">
          <el-form-item :label="login.first">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item :label="login.second">
            <el-input v-model="form.password" type="password" show-password>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button type="success" round class="btn" @click="handleLogin">登录</el-button>
        <el-row class="forget"> 
          <el-link type="danger" >忘记密码</el-link>
          <el-link type="success" @click="regiseter">免费注册</el-link>
        </el-row>
      </el-card>
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
      form: {
        name: "",
        password: "",
      },
      login: {
        first: "账号",
        second: "密码",
      },
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(cur) {
      if (cur === "1") {
        this.login = {
          first: "账号",
          second: "密码",
        };
      } else {
        this.login = {
          first: "手机号",
          second: "短信",
        };
      }
    },
    handleLogin(){
      this.$router.push({'name':'about'})
    },
    regiseter(){
      this.$router.push({'name': 'register'})
    }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
}
.icon {
  margin-left: 200px;
  font-size: 80px;
  font-weight: bold;
  color: pink;
}
.main {
  height: 600px;
  background-image: url("../../assets/img/01.jpeg");
  background-size: 100% 100%;
  background-repeat: repeat-x;
  position: relative;
}
.card {
  height: 330px;
  width: 400px;
  top: 100px;
  right: 200px;
  position: absolute;
}
.el-menu-demo {
  margin-bottom: 20px;
}
.btn {
  margin-left: 80px;
  width: 280px;
  background-color: pink;
}
.forget{
  margin-top: 20px;
  margin-left: 220px;
}
.forget .el-link{
  margin-left:10px ;
}
</style>>
