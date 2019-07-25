<template>
  <div class="body">
    <div class="login">
      <h4>用户登录</h4>
      <Form ref="loginForm" :model="operForm" :rules="loginRules" inline>
        <FormItem prop="username">
          <Input prefix="md-contact" type="text" v-model="operForm.username" placeholder="请输入账号" style="width: 250px;height:45px" />
        </FormItem>
        <FormItem prop="password">
          <Input prefix="md-key" type="password" v-model="operForm.password" placeholder="请输入密码" style="width: 250px;height:45px" />
        </FormItem>
        <FormItem>
            <Button type="primary"  @click="handleLogin()" style="width: 250px;height:35px">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      operForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          // 做登录校验,暂时校验admin/111111,后续去查询后台接口校验
          if (this.$store.dispatch('login', this.operForm)) {
            // 路由跳转,跳转到首页
            this.$router.push({ path: '/businPage/home' })
          } else {
            // 密码或者用户名错误
            this.$Message.error('用户名或者密码有误')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.body{
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #008DD5;
  .login{
    margin: auto;
    width: 400px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4{
      margin-bottom: 30px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      color: #4A94FA;
    }
  }
}
</style>
