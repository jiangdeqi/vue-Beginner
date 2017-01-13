<template>
  <div>
login {{value1}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '123456789',
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
