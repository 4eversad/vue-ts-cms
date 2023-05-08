<template>
  <router-link to="/login">登录</router-link> |
  <router-link to="/main">首页</router-link>
  <router-view />
</template>

<style lang="less">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
