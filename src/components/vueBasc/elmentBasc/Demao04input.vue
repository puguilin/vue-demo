<template id="demao04">
  <div>
    <h>Input 输入框 </h>
    <!-- Input 输入框  -->
    <h>输入框 --基础用法 </h>
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <!--Input 输入框   禁用状态 -->
    <h>输入框 --禁用状态 </h>
    <el-input placeholder="请输入内容" v-model="input02" :disabled="true">
    </el-input>
    <!--Input 输入框   可清空  使用clearable属性即可得到一个可清空的输入框-->
    <h>输入框 --可清空 </h>
    <el-input placeholder="请输入内容" v-model="input03" clearable> </el-input>

    <!--Input 输入框   密码框  使用show-password属性即可得到一个可切换显示隐藏的密码框-->
    <h>输入框 --密码框 </h>
    <el-input placeholder="请输入密码" v-model="input04" show-password>
    </el-input>

    <!--Inputel-icon 为 raw SVG 图标提供额外的属性,  -->

    <h>带图标的输入框 带 icon 的输入框 结合 el-icon 使用</h>
    <hr />
    <div class="demo-input-size">
      <el-icon :size="20"><Edit /></el-icon>
      <el-icon color="#409EFC" class="no-inherit"> <Share /></el-icon>
      <el-icon> <Delete /></el-icon>
      <el-icon class="is-loading"> <Loading /></el-icon>
      <el-button type="primary"
        ><el-icon style="vertical-align: middle"><Search /></el-icon
        ><span style="vertical-align: middle"> Search </span></el-button
      >
      <el-button type="primary" icon="Edit" circle></el-button>
    </div>

    <!--直接使用 SVG 图标  由于SVG图标默认不携带任何属性  你需要直接提供它们-->
    <h>直接使用 SVG 图标</h>
    <div style="font-size: 20px">
      <Edit style="width: 1em; height: 1em; margin-right: 8px" />
      <Share style="width: 1em; height: 1em; margin-right: 8px" />
      <Delete style="width: 1em; height: 1em; margin-right: 8px" />
      <Search style="width: 1em; height: 1em; margin-right: 8px" />
    </div>

    <!-- 文本域 文本域高度可通过 rows 属性控制 -->
    <h>文本域 </h>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea"
    >
    </el-input>
    <!--
      文本域二 
     通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，
     并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。
     -->
    <h>文本域二 </h>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入内容"
      v-model="textarea2"
    >
    </el-input>
    <!-- 计数器 -->
    <h>计数器 </h>
    <el-input-number
      v-model="num"
      @change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
    ></el-input-number>

    <!-- 禁用状态  disabled属性接受一个Boolean，设置为true即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置min属性和max属性，不设置min和max时，最小值为 0。-->
    <div>
      <h>禁用状态 </h>
      <el-input-number v-model="num2" :disabled="true"></el-input-number>
    </div>
    <!-- 步数 设置step属性可以控制步长，接受一个Number。-->
    <div>
      <h>步数 </h>
      <el-input-number v-model="num3" :step="2"></el-input-number>
    </div>
    <!-- ¶严格步数 step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数。。-->
    <div>
      <h>¶严格步数 </h>
      <el-input-number v-model="num4" :step="2" step-strictly></el-input-number>
    </div>

    <!--    精度  设置 precision 属性可以控制数值精度，接收一个 Number。
        precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。
-->
    <div>
      <h>精度 控制小数位数</h>
      <el-input-number
        v-model="num5"
        :precision="2"
        :step="0.3"
        :max="10"
      ></el-input-number>
    </div>
    <!-- 尺寸 -->
    <div>
      <div>
        <h>尺寸</h>
        <el-input-number v-model="num1"></el-input-number>
        <el-input-number size="medium" v-model="num2"></el-input-number>
        <el-input-number size="small" v-model="num3"></el-input-number>
        <el-input-number size="mini" v-model="num4"></el-input-number>
      </div>
    </div>


    <!-- 按钮位置  设置 controls-position 属性可以控制按钮位置。
    change	绑定值被改变时触发
    blur	在组件 Input 失去焦点时触发
    focus	在组件 Input 获得焦点时触发
    -->
     <div>
        <h>按钮位置 </h>
          <el-input-number v-model="num" controls-position="right" @change="handleChange1" :min="1" :max="10"></el-input-number>
      </div>
  </div>
</template>


<script>
export default {
  name: "demao04",
  data() {
    return {
      input1: "",
      input2: "",
      input: "",
      input02: "",
      input03: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      textarea: "",
      textarea2: "",
      num: 1,
      num2: 2,
      num3: 1.5,
      num4: 2,
      num5: 1,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
      handleChange1(value) {
        console.log(value);
      }
  },
};
</script>