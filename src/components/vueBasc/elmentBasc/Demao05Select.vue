<template id="demao05">
  <div>
    <!-- Select 选择器 当选项过多时，使用下拉菜单展示并选择内容。 -->
    <h>Select 选择器 </h>
    <div>
      <!-- 基础用法 适用广泛的基础单选  -->
      <h>Select --基础用法 </h>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <!-- 有禁用选项  在el-option中，设定disabled值为 true，即可禁用该选项-->
    <div>
      <h>Select --有禁用选项 </h>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </el-select>
    </div>

    <!-- 禁用状态  为el-select设置disabled属性，则整个选择器不可用-->
    <div>
      <h>Select --禁用状态 </h>
      <el-select v-model="value" disabled placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <!-- 可清空单选  包含清空按钮，可将选择器清空为初始状态
          为el-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。
     -->
    <div>
      <h>Select --可清空单选 </h>
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <hr />
    <!-- 基础多选  为el-select设置multiple属性即可启用多选，
    此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。
    value2  label2
    -->
    <div>
      <h>Select --基础多选 </h>
      <el-select v-model="value1" multiple placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value2"
          :label="item.label2"
          :value="item.value2"
        >
        </el-option>
      </el-select>

      <el-select
        v-model="value2"
        multiple
        collapse-tags
        style="margin-left: 20px"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options2"
          :key="item.value2"
          :label="item.label2"
          :value="item.value2"
        >
        </el-option>
      </el-select>
    </div>

    <!-- 自定义模板 可以自定义备选项   自定义的 HTML 模板插入el-option的 slot 中即可-->
    <div>
      <h>Select --自定义模板 </h>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{
            item.value
          }}</span>
        </el-option>
      </el-select>
    </div>

    <!-- 分组  使用el-option-group对备选项进行分组，它的label属性为分组名-->
    <div>
      <h>Select --分组 </h>
      <el-select v-model="value" placeholder="请选择">
        <el-option-group
          v-for="group in options3"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-option-group>
      </el-select>
    </div>

    <!-- 可搜索 。
    为el-select添加filterable属性即可启用搜索功能。默认情况下，Select 会找出所有label属性包含输入值的选项。如果希望使用其他的搜索逻辑，
    可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。
-->
    <div>
      <h>Select --可搜索 </h>
      <el-select v-model="value" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    

    <!-- 自定义模板 。-->
    <div>
      <h>Select --基础多选 </h>
    </div>
  </div>
</template>


<script>
export default {
  name: "demao05",
  data() {
    return {
      //单选
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true,
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      //多选框
      options2: [
        {
          value2: "选项1",
          label2: "黄金糕",
        },
        {
          value2: "选项2",
          label2: "双皮奶",
        },
        {
          value2: "选项3",
          label2: "蚵仔煎",
        },
        {
          value2: "选项4",
          label2: "龙须面",
        },
        {
          value2: "选项5",
          label2: "北京烤鸭",
        },
      ],
      value1: [],
      value2: [],
      //自定义模板
      cities: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],
      value: "",
      //分组
      options3: [
        {
          label: "热门城市",
          options3: [
            {
              value: "Shanghai",
              label: "上海",
            },
            {
              value: "Beijing",
              label: "北京",
            },
            {
              value: "Chendu",
              label: "成都",
            },
          ],
        },
        {
          label: "城市名",
          options3: [
            {
              value: "Chengdu",
              label: "成都",
            },
            {
              value: "Shenzhen",
              label: "深圳",
            },
            {
              value: "Guangzhou",
              label: "广州",
            },
            {
              value: "Dalian",
              label: "大连",
            },
          ],
        },
      ],
      value: "",
    };
  },
  methods: {},
};
</script>