<template>
  <div class="home-container">
    <el-button type="success" round>{{ userInfo.nickname }}</el-button>
      <el-button type="danger" round @click="logout">退出</el-button>
    <el-row class="tac">
  <el-col :span="4">
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">所有收货人信息</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu> <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">所有收货人信息</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu> <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">所有收货人信息</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
  <el-col :span="20">
    <template>
  <el-table
    :data="recieveInfo"
    style="width: 100%">

    <el-table-column label="收货人信息">
      <el-table-column
        prop="receiver_name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="手机号"
        width="120">
      </el-table-column>
      <el-table-column label="地址">
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="area"
          label="区镇"
          width="120">
        </el-table-column>
        <el-table-column
          prop="detailed_address"
          label="详细地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="postcode"
          label="邮编"
          width="120">
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>
  </el-col>

</el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
       recieveInfo:[],
       userInfo:{}
    }
  },
  created() {
    this.$message({
          message: '恭喜你，登陆成功!',
          type: 'success'
        });
    this.getReceiverAddress();
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"))

  },
  methods: {
    getReceiverAddress() {
      let token = localStorage.getItem("token")
      this.$http.get('/users/getReceiverAddress')
      .then(res => {
        if(res.data.status === 200) {
          this.recieveInfo = res.data.data
        }
      })
      .catch(err => {
        console.dir(err)
      })
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");

      this.$router.push("/")
    }
  }
}
</script>
<style lang="less" scoped>
  .home-container {
    .el-menu {
      border: none;
    }
    .el-col-20 {
      padding: 70px 30px;

    }

  }
</style>
