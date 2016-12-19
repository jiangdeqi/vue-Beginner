<template>
  <el-row>
    <el-col :span="6" class="mrg10T pad10L pad10R">
      <div class="grid-content pad10A bg-ccc height-300">
        <el-col :span="8" v-for="list in cardEntry" class="mrg10T pad10L pad10R">
          <p><i class="el-icon-circle-check"></i>{{list.name}}{{list.id}}</p>
          <p>{{list.msg}}</p>
          <el-button @click.native="add(list)">增加</el-button>
        </el-col>
      </div>
    </el-col>
    <el-col :span="6" v-for="list in cardList" class="mrg10T pad10L pad10R">
      <div class="grid-content pad10A bg-ccc height-300">
        <p><i class="el-icon-star-on"></i>{{list.name}}</p>
        <p>{{list.msg}}</p>
      </div>
    </el-col>
    <el-col :span="6" class="mrg10T pad10L pad10R">
      <div class="grid-content pad10A bg-ccc height-300">
        <el-radio class="radio" v-model="radio" label="1">备选项1</el-radio>
        <el-radio class="radio" v-model="radio" label="2">备选项2</el-radio>
        <el-select v-model="value" style="width:240px;">
          <el-option v-for="item in options" :label="item.label" :value="item.value" @click.native="tiemok(item)">
          </el-option>
        </el-select>
      </div>
    </el-col>
    <el-col :span="6" class="mrg10T pad10L pad10R">
      <div class="grid-content pad10A bg-ccc height-300">
        <el-progress class="mrg25T" type="circle" :percentage="25"></el-progress>
        <el-button type="primary" @click="kli()">请求调试</el-button>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  // 引入子模板
  // import Hello from './components/hello'

  export default {
    data() {
      return {
        radio: '',
        cardList: [],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        cardEntry:[{
          name:'卡片一',
          id:'1',
          msg:'卡片一信息'
        },{
          name:'卡片二',
          id:'2',
          msg:'卡片二信息'
        },{
          name:'卡片三',
          id:'3',
          msg:'卡片三信息'
        }]
      };
    },
    components: {

    },
    methods: {
      tiemok(item) {
        console.log(item.label);
      },
      add(item) {
        this.cardList.push({
          name:item.name,
          id:item.id,
          msg:item.msg
        });
      },
      kli() {
        this.$http.get('/data/menu.json').then((response) => {
          console.log(response);
            // 响应成功回调
            debugger
        }, (response) => {
            // 响应错误回调
            debugger
        });
      }
    }
    // debugger
  }
</script>
