<template>
  <div>
  <el-card class="box-card mrg10T mrg10L">
    <div class="text item">
      <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
      </el-date-picker>
      <el-button :plain="true" @click.native="open">打开消息提示</el-button>
    </div>
  </el-card>
  <el-row>
    <el-col :span="6" v-for="itm in menus" class="mrg10T pad10L pad10R">
      <div class="grid-content pad10A bg-ccc min-height250">
     {{itm.name}}
      </div>
    </el-col>
  </el-row>
  </div>
</template>
<style scoped>
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .box-card {
    width: 480px;
  }
</style>
<script>
  export default {
    data() {
      return {
        value1: '',
        menus:[{
          name:"良心",
          id:"1"
        },{
          name:"铁球",
          id:"2"
        },{
          name:"黑心",
          id:"3"
        },{
          name:"棒球手",
          id:"4"
        }]
      };
    },
      methods: {
      open() {
        this.$message('这是一条消息提示');
      }
    }
  };
</script>
