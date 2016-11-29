<template>
  <el-card class="box-card mrg10T mrg10L">
    <div class="text item">
      <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
      </el-date-picker>
      <el-button :plain="true" @click.native="open">打开消息提示</el-button>
    </div>
  </el-card>
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
        value1: ''
      };
    },
      methods: {
      open() {
        this.$message('这是一条消息提示');
      }
    }
  };
</script>
