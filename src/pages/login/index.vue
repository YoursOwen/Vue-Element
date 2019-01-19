<template>
  <div class="login-container">
    <h1 class="title">登陆</h1>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="postLoginHandler">登录</el-button>

    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          password: ''
        }
      };
    },
    methods: {
      postLoginHandler() {
        if(this.formLabelAlign.name.trim() == "" || this.formLabelAlign.password.trim() == "") {
          return this.$message.error('请输入用户名或密码!')

          }

        this.$http.post('/users/login',{
          username: this.formLabelAlign.name,
          password: this.formLabelAlign.password
        })
        .then(res => {
          if(res.data.status === 200) {
           // 第一次登录成功时，服务器会生成token令牌，
          //成功后要将token保存到本地，以供后面使用
          localStorage.setItem("token",res.data.data.token)
          localStorage.setItem("userInfo",JSON.stringify(res.data.data))
          //编程式导航跳转
          // 其中name属性，在需要获取params内容的时候才需要在这里和router.js中配置
          this.$router.push("home")
          }
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .login-container {
    width: 31.25rem;
    margin: 100px auto;
    border: 1px solid #ccc;
    border-radius: .625rem;
    padding: 1.875rem;
    .title {
      font-size: 1.625rem;
    }

  }
</style>

