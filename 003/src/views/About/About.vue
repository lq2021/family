<template>
  <div class="about">
     <el-carousel indicator-position="none" height="400px" >
        <el-carousel-item v-for="(item, index) in url" :key="index">
          <img :src="item" alt="" class="img-item" />
        </el-carousel-item>
      </el-carousel>
      <el-card class="card" >
        <el-row v-for="(item, index) in text" :key="index" class="bottom">
          <div class="title">
            <i class="iconfont icon">{{ item.icon }}</i>
            <span class="icon-text">{{ item.title }}</span>
          </div>
          <hr />
          <span class="title-text">
            {{ item.word }}
          </span>
        </el-row>
      </el-card>
      <div class="center" >
        <div class="center-title">——严选月子中心——</div>
        <div class="center-wrap">
          <div class="img-wrap" v-for="(item, index) in center" :key="index">
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
      <div class="center" >
        <div class="center-title">——月子知识——</div>
        <div class="link">
          <el-card class="link-card" v-for="(item,index) in link" :key="index">
            <div class="link-icon">
              <i class="iconfont icon">{{ item.icon }}</i>
              <span class="icon-text">{{ item.title }}</span>
            </div>
            <el-link class="more">{{more}}</el-link>
          </el-card>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
       url: [
        require("../../assets/img/item1.jpg"),
        require("../../assets/img/item2.jpg"),
        require("../../assets/img/item3.jpg"),
      ],
      text: [
        {
          icon: "\ue61f",
          title: "孕妇、宝宝",
          word:
            "快速预约优选月嫂/月子中心了解市场行情，一站式签约流程掌握各种科学坐月子的方法",
        },
        {
          icon: "\ue61a",
          title: "知识课堂",
          word:
            "快速预约优选月嫂/月子中心了解市场行情，一站式签约流程掌握各种科学坐月子的方法",
        },
        {
          icon: "\ue600",
          title: "月子中心",
          word: "良好的宣传渠道,了解市场行情,学习各种科学坐月子的方法",
        },
      ],
      center: [
        require("../../assets/img/02.jpg"),
        require("../../assets/img/03.jpg"),
        require("../../assets/img/04.jpg"),
        require("../../assets/img/05.jpg"),
        require("../../assets/img/06.jpg"),
        require("../../assets/img/07.jpg"),
        require("../../assets/img/08.jpg"),
        require("../../assets/img/09.jpg"),
      ],
      link: [
        {
          icon: '\ue61f',
          title: '产前护理'
        },
         {
          icon: '\ue61a',
          title: '产后护理'
        }, {
          icon: '\ue600',
          title: '婴儿护养'
        }
      ],
      more: '更多>>',
    }
  }
}
</script>
<style scoped>
.img-item {
  width: 100%;
  height: 100%;
}

.card {
  top: 186px;
  left: 180px;
  background-color: #fcfcfc;
  opacity: 0.6;
  height: 400px;
  width: 300px;
  position: absolute;
  z-index: 20;
}
.icon {
  font-size: 35px;
  color: pink;
}
.icon-text {
  color: #f50;
  font-size: 20px;
}
.title-text {
  margin-top: 10px;
  font-size: 18px;
  color: #000;
}
.bottom {
  margin-bottom: 20px;
}
.center {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.center .center-title {
  height: 50px;
  font-size: 30px;
  line-height: 50px;
  align-items: center;
  margin: auto;
  color: #ccc;
  margin-bottom: 20px;
}
.center-wrap {
  display: flex;
  width: 1400px;
  margin: auto;
  height: 400px;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-evenly;
}
.img-wrap {
  width: 290px;
  height: 180px;
  cursor: pointer;
}
.img-wrap img {
  width: 100%;
  height: 100%;
}
.link {
  margin: auto;
  margin-top: 20px;
  display: flex;
  width: 1400px;
  justify-content: space-evenly;
  align-items: center;
}
.link-card{
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.link-card div{
  margin-right: 30px;
  display: inline-block;
}
</style>