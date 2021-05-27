<template>
  <el-row class="classify">
    <el-col :span="3" class="title">{{title}}</el-col>
    <el-col :span="2" class="text"><a href="" class="a">不限</a> </el-col>
    <el-col :span="2" v-for="(item,index) in content" :key="index" class="text "> <a href="" class="active">{{item}}</a></el-col>
    <el-col :span="1" class="icon-box" @click="more" v-if="show">
        <i class="el-icon-caret-bottom icon" v-if="change"> </i>
        <i class="el-icon-caret-top" v-else></i>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    title: String,
    content: Array,
    show: String
  },
  data(){
    return{
      change: true
    }
  },
  methods: {
    more(){
      console.log(1);
      this.change = !this.change;
    }
  }
}
</script>

<style scoped>
.classify{
  /* background-color: pink; */
  line-height: 40px;
  border: 1px solid rgba(204, 204, 204, 0.8);
  border-bottom: none;
  box-sizing: content-box;
  padding: 5px;
}
.title{
  height: 100%;
  background-color: #e9e7ef;
  opacity: 0.8;
  text-align: center;
}
.text{
  text-align: center;
  font-size: 14px;
 
}
a{
  color: #666;
  padding:  3px 8px;
}
.a{
  background-color: #f40;
  color: #fff;
  text-align: center;
  
}
.a:hover{
  background-color: #dc3023;
}
.active{
  border: 1px solid transparent;
}
.active:hover{
  border: 1px solid red;
  color: pink;
}
.icon-box{
  color: #f40;
  font-size: 25px;
  cursor: pointer;
}
.icon-box:hover {
  color: #dc3023;
}
</style>