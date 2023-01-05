<template id="demao03">
  <div>
    <!-- Radio 单选框  要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。 -->
    <h>Radio 单选框 </h>
    <div>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项2</el-radio>
      <el-radio v-model="radio" label="3">备选项3</el-radio>
    </div>
    <!-- Radio 禁用状态 只要在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。 -->
    <h>Radio 禁用状态 添加 disabled </h>
    <div>
      <el-radio v-model="radiojy" label="4">备选项-不禁用</el-radio>
      <el-radio disabled v-model="radiojy" label="5">备选项2-禁用</el-radio>
      <el-radio v-model="radiojy" label="6">备选项-不禁用</el-radio>
    </div>

    <!-- el-radio-button 只需要把el-radio元素换成el-radio-button元素即可，此外，
    Element 还提供了size属性。
      medium
      small
      mini
    
     -->
    <hr style="border: 2px solid #cfc" />

    <h>按钮样式 </h>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>

    <!-- el-radio-button 置灰显示 -->
    <h> 按钮样式 置灰显示 </h>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio4" disabled size="medium">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>

    <!-- 带有边框 的单选项  border属性可以渲染为带有边框的单选框-->
    <h> 带有边框 的单选项 </h>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio2" size="small">
        <el-radio v-model="radio2" label="7" border size="medium"
          >备选项1</el-radio
        >
        <el-radio v-model="radio2" label="8" border size="medium"
          >备选项2</el-radio
        >
      </el-radio-group>
    </div>

    <hr style="border: 2px solid #cfc" />
    <!-- 多选框组 -->
    <h> 多选框组 </h>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <!-- indeterminate 多选框全选  indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果-->
    <h> 多选框全选 </h>
    <div>
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
      <div style="margin: 15px 0"></div>
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox>
      </el-checkbox-group>
    </div>

 <!--  多选框  可选项目数量的限制  使用 min 和 max 属性能够限制可以被勾选的项目的数量。-->
    <h> 多选框 --可选项目数量的限制 </h>
    <el-checkbox-group 
    v-model="checkedCities02"
    :min="1"
    :max="3">
    <el-checkbox v-for="city in cities02" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
    
  </div>
</template>


<script>


const cityOptions = ['上海', '北京', '广州', '深圳'];
const cityOptions02 = ['上海02', '北京02', '广州02', '深圳02'];
export default {
  name: "demao03",
  data() {
    return {
      radio: "",
      radiojy: "",
      radio2: "",
      radio3: "",
      checkList:['复选框 A','选中且禁用'], //多选框组
      //多选框全选
       checkAll: false,
       checkedCities: ['上海', '北京'],
       cities: cityOptions,
       isIndeterminate: true,  //indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果
       
       // 多选框  可选项目数量的限制
       checkedCities02: ['上海02', '北京02'],
       cities02: cityOptions02
       


      
    };
  },
  methods: {

      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }

};
</script>