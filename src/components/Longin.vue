<template>
  <div class="body">
    <div class="login">
      <h4>用户登录</h4>
      <Form>
        <FormItem>
          <Input prefix="md-contact" v-model="operForm.username" placeholder="请输入账号" style="width: 250px;height:45px" />
        </FormItem>
        <FormItem>
          <Input prefix="md-key" type="password" v-model="operForm.password" placeholder="请输入密码" style="width: 250px;height:45px" />
        </FormItem>
        <Button type="primary" style="width: 250px;height:35px">登录</Button>
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
      }
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
