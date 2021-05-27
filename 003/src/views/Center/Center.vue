<template>
  <div class="center">
    <el-card class="cart">
      <el-breadcrumb separator=">" class="bread">
        <el-breadcrumb-item :to="{ path: '/about' }"
          ><i class="el-icon-location-outline"></i>首页</el-breadcrumb-item
        >
        <el-breadcrumb-item>月子中心</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="classify-box">
        <classify :title="'所在省份'" :content="content" show="true"></classify>
        <classify
          :title="'价格区间'"
          :content="['5千-1万', '1万-2万', '2-5万', '5万-10万', '10万以上']"
        ></classify>
        <classify
          :title="'类型'"
          :content="['酒店式', '公寓式', '别墅式', '医院式', '独栋式']"
        ></classify>
      </div>
    </el-card>
    <el-card class="problem"> </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        "北京",
        "上海",
        "天津",
        "河北",
        "内蒙古",
      ],
      contentCount: 0,
    };
  },
  methods: {

  },
};
</script>

<style scoped>
.center {
  position: relative;
  width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.bread {
  font-size: 16px;
}

.cart {
  width: 1000px;
}
.problem {
  width: 300px;
}
.classify-box {
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
}


</style>