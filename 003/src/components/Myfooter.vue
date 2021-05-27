<template>
  <div class="footer">
     <el-divider></el-divider>
      <el-row class="row">
        <el-col :span="2" class="item">关于我们</el-col>
        <el-col :span="2" class="item">联系客服</el-col>
        <el-col :span="2" class="item">关于本站</el-col>
        <el-col :span="2" class="item">帮助中心</el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.footer{
  height: 80px;
}
.row{
  width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.item:hover{
  color: pink;
  cursor: pointer;
}
</style>