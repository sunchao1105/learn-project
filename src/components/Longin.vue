<template>
  <div class="body">
    <div class="login">
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
    padding-top: 50px;
    padding-bottom: 30px;
    background-color: #fff;
    display: flex;
    justify-content: center;
  }
}
</style>
