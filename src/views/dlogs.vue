<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
    <el-dialog title="收货地址" v-model="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
    <el-dialog title="收货地址" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <select v-model="vmodel">
          <option v-for="val in selectVal" v-bind:value="val.id" >{{val.name}}</option>
        </select>
        <el-button type="primary" @click.native="tiemok()">取值{{vmodel}}</el-button>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style>
  .el-dialog {
    margin-top: 150px;
  }

</style>
<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        vmodel:'1',
        selectVal: [{
          name: '测试数据1',
          id: 1
        },{
          name: '测试数据2',
          id: 2
        },{
          name: '测试数据3',
          id: 3
        },{
          name: '测试数据4',
          id: 4
        },{
          name: '测试数据5',
          id: 5
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      tiemok(val) {
        console.log(this.vmodel);
        //debugger
      }
    }
  };
</script>
