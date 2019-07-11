<template>
  <div id="index">
    <el-container>
      <el-header class="header">
        <vheader/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '../components/NavMenu'
import Header from '../components/header'

export default {
  name: 'index',
  components: {
    'navmenu': NavMenu,
    'vheader': Header
  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}
</style>
