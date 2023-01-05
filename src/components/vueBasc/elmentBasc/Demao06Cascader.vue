<template id="demao06">
  <div>
    <!-- Cascader 级联选择器 -->
    <h>Cascader 级联选择器</h>

    <!-- 基础用法 有两种触发子菜单的方式 。
    只需为 Cascader 的options属性指定选项数组即可渲染出一个级联选择器。通过props.expandTrigger可以定义展开子级菜单的触发方式。
 -->
    <div>
      <!-- <h>1、默认 click 触发子菜单 </h> -->
      <div class="block">
        <span class="demonstration">1、默认 click 触发子菜单</span>
        <el-cascader
          v-model="value"
          :options="options"
          @change="handleChange"
        ></el-cascader>
      </div>
    </div>

    <div>
      <!-- <h> 2、hover 触发子菜单 </h> -->
      <div class="block">
        <span class="demonstration">2、hover 触发子菜单</span>
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader>
      </div>
    </div>

    <!-- 禁用选项 。 通过在数据源中设置 disabled 字段来声明该选项是禁用的
  options指定的数组中的第一个元素含有disabled: true键值对，因此是禁用的。
  在默认情况下，Cascader 会检查数据中每一项的disabled字段是否为true，
  如果你的数据中表示禁用含义的字段名不为disabled，可以通过props.disabled属性来指定。
  当然，value、label和children这三个字段名也可以通过同样的方式指定。
-->
    <div>
      <h>级联选择 -- 禁用选项 </h>
      <el-cascader :options="options"></el-cascader>
    </div>

    <!-- 级联选择 -- 可清空 。 通过 clearable 设置输入框可清空-->
    <div>
      <h>级联选择 -- 可清空 </h>
      <el-cascader :options="options" clearable></el-cascader>
    </div>

    <!-- 级联选择 -- 仅显示最后一级 。 属性show-all-levels定义了是否显示完整的路径，将其赋值为false则仅显示最后一级-->
    <div>
      <h>级联选择 -- 仅显示最后一级 </h>
      <el-cascader :options="options" :show-all-levels="false"></el-cascader>
    </div>

    <!-- 级联选择 -- 多选 可通过 props.multiple = true 来开启多选模式 -->
    <div>
      <!-- <h>级联选择 -- 多选 默认显示所有Tag</h> -->
      <div class="block">
        <span class="demonstration">默认显示所有Tag</span>
        <el-cascader :options="options2" :props="props" clearable></el-cascader>
      </div>
    </div>

    <!-- 级联选择 -- 多选   折叠展示Tag 。-->
    <div>
      <!-- <h>级联选择 -- 多选 折叠展示Tag</h> -->
      <div class="block">
        <span class="demonstration">折叠展示Tag</span>
        <el-cascader
          :options="options2"
          :props="props"
          collapse-tags
          clearable
        ></el-cascader>
      </div>
    </div>

    <!-- 
      在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。
      启用该功能后，可让父子节点取消关联，选择任意一级选项。
      可通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。-->

    <div>
      <!-- 级联选择 -- 选择任意一级选项   -->

      <h>级联选择 -- 选择任意一级选项g</h>
      <div class="block">
        <!-- <span class="demonstration">单选选择任意一级选项</span> -->
        <el-cascader
          :options="options"
          :props="{ checkStrictly: true }"
          clearable
        ></el-cascader>
      </div>
    </div>

    <div>
      <!-- 级联选择 -- 多选选择任意一级选项   -->
      <h>级联选择 -- 多选选择任意一级选项</h>
      <div class="block">
        <!-- <span class="demonstration">多选选择任意一级选项</span> -->
        <el-cascader
          :options="options"
          :props="{ multiple: true, checkStrictly: true }"
          clearable
        ></el-cascader>
      </div>
    </div>

    <!-- 自定义模板 。-->
    <div>
      <h>Select --基础多选 </h>
    </div>
  </div>
</template>


<script>
export default {
  name: "demao06",
  data() {
    return {
      value: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          disabled: true,
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],

      //级联多选
      props: { multiple: true },
      options2: [
        {
          value: 1,
          label: "东南",
          children: [
            {
              value: 2,
              label: "上海",
              children: [
                { value: 3, label: "普陀" },
                { value: 4, label: "黄埔" },
                { value: 5, label: "徐汇" },
              ],
            },
            {
              value: 7,
              label: "江苏",
              children: [
                { value: 8, label: "南京" },
                { value: 9, label: "苏州" },
                { value: 10, label: "无锡" },
              ],
            },
            {
              value: 12,
              label: "浙江",
              children: [
                { value: 13, label: "杭州" },
                { value: 14, label: "宁波" },
                { value: 15, label: "嘉兴" },
              ],
            },
          ],
        },
        {
          value: 17,
          label: "西北",
          children: [
            {
              value: 18,
              label: "陕西",
              children: [
                { value: 19, label: "西安" },
                { value: 20, label: "延安" },
              ],
            },
            {
              value: 21,
              label: "新疆维吾尔族自治区",
              children: [
                { value: 22, label: "乌鲁木齐" },
                { value: 23, label: "克拉玛依" },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>