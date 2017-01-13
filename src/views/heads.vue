<template>
<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
  <el-menu-item index="3"><router-link to="/list">list创建</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="4"><router-link to="/news">news创建</router-link></el-menu-item>
  <el-menu-item index="5"><router-link to="/dlog">dialog创建</router-link></el-menu-item>
  <el-menu-item index="5"><router-link to="/login">登陆页面</router-link></el-menu-item>
  
</el-menu>
</template>



<script>
  export default {
    data(){
      return {
        num1: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
