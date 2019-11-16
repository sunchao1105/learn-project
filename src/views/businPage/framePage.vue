<template>
  <div class="homePage">
    <div class="topNav">
      <div class="logo">
      </div>
      <div class="operatorInfo">
        <Menu mode="horizontal" theme="primary" active-name="1"  @on-select="handleMenuEvent">
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    用户管理
                </template>
                <MenuItem name="3-1">用户中心</MenuItem>
                <MenuItem name="3-2">修改密码</MenuItem>
                <MenuItem name="logout">退出登录</MenuItem>
            </Submenu>
        </Menu>
      </div>
    </div>
    <div class="homeBody">
      <div class="leftNav">
        <Menu theme="light">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup>
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
      </div>
      <div class="homeContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    handleMenuEvent (name) {
      if (name === 'logout') {
        if (this.$store.dispatch('logout')) {
          this.$router.push({ path: '/login' })
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.homePage{
  display: flex;
  flex-direction: column;
  height: 100%;
  .topNav{
    height: 10%;
    background-color: #2D8CF0 !important;
    display: flex;
    flex-direction: row;
    .logo{
      flex-grow: 1;
    }
    .operatorInfo{
      display: flex;
    }
  }
  .homeBody{
    display: flex;
    flex-direction: row;
    height: 90%;
    // background-color: #EEF5FD;
    .leftNav{
      /deep/.menu-submenu-title{
        padding-left: 0px !important;
      }
      /deep/.ivu-menu-submenu-title{
        padding-left: 0px !important;
      }
      /deep/.ivu-menu{
        width: 180px !important;
        height: 100%;
      }
    }
    .homeContent{
      flex-grow: 1;
      background-color: #FFF;
    }
  }
}
</style>
