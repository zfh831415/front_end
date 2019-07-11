<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      unique-opened
      router
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span v-text="item.name"></span>
          </template>
          <el-menu-item-group v-for="sub in item.sub" :key="sub.componentName">
            <el-menu-item  v-text="sub.name" :index="sub.componentName"></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import menu from '../config/menu-config'

export default {
  data() {
    return {
      menu: menu
    }
  },
  methods: {
      handleOpen(key, keyPath) {
      console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
      console.log(key, keyPath);
      }
  }
}
</script>

<style>

</style>
