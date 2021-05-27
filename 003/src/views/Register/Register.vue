<template>
  <el-container>
    <el-header class="header" height="100px">
      <i class="iconfont icon">&#xe61a;</i>
      <img src="../../assets/img/logo.png" alt="" />
      <el-link type="success" @click="login" class="login-link"
        >已有账号?请登录</el-link
      >
    </el-header>
    <el-main class="main">
      <el-card class="card">
        <el-form label-position="left" label-width="80px" :model="form">
          <el-form-item label="手机号码">
            <el-input v-model="form.phone" placeholder="请输入手机号">
              <el-select
                v-model="select"
                slot="prepend"
                placeholder="请选择"
                class="el-select"
              >
                <el-option label="中国大陆  +86" value="1"></el-option>
                <el-option label="中国台湾  +886" value="2"></el-option>
                <el-option label="中国香港  +852" value="3"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input
              v-model="form.code"
              placeholder="请输入校验码"
              class="code-input"
            >
            </el-input>
            <el-button type="primary" plain class="btn">获取验证码</el-button>
          </el-form-item>
          <el-button type="danger" class="agree">同意协议并注册</el-button>
        </el-form>
        <div class="text">
          已阅读并同意以下协议隐私权政策、法律声明、客户端服务协议
        </div>
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
        phone: "",
        code: "",
      },
      select: "",
    };
  },
  methods: {
    login(){
      this.$router.push({name:'login'})
    },
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
.login-link {
  font-size: 20px;
  color: pink;
}
.login-link:hover {
  color: #f40;
}
.main {
  background-color: pink;
}
.card {
  margin: auto;
  height: 400px;
  width: 600px;
  border: none;
  box-sizing: border-box;
  padding-top: 60px;
  justify-items: center;
}
.el-select {
  width: 160px;
}
.code-input {
  width: 360px;
}
.btn {
  background-color: pink;
  color: #fff;
  font-size: 14px;
  outline: none;
}
.agree {
  width: 300px;
  margin-left: 120px;
  margin-top: 20px;
}
.text {
  font-size: 14px;
  color: #999;
  width: 300px;
  margin: auto;
  height: 20px;
  line-height: 20px;
  margin-top: 30px;
  cursor: pointer;
}
</style>