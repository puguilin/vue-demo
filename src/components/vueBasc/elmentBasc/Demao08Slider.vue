<template id="demao08">
  <div>
    <!-- Slider 滑块-->
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <el-slider v-model="value5" disabled></el-slider>
    </div>

    <hr style="border: 2px solid #cfc" />
    <!-- 离散值  改变step的值可以改变步长，通过设置show-stops属性可以显示间断点-->
    <h>离散值</h>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <el-slider v-model="value1" :step="10"> </el-slider>
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <el-slider v-model="value2" :step="10" show-stops> </el-slider>
    </div>

    <hr style="border: 2px solid #cfc" />
    <!-- 带有输入框 设置show-input属性会在右侧显示一个输入框-->
    <h>带有输入框</h>
    <div class="block">
      <el-slider v-model="value2" show-input> </el-slider>
    </div>

    <hr style="border: 2px solid #cfc" />
    <!-- 范围选择  设置range即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值-->
    <h>范围选择</h>
    <div class="block">
      <el-slider v-model="value" range show-stops :max="10"> </el-slider>
    </div>

    <hr style="border: 2px solid #cfc" />
    <!-- 竖向模式 设置vertical可使 Slider 变成竖向模式，此时必须设置高度height属性-->
    <h>竖向模式</h>
    <div class="block">
      <div class="block">
        <el-slider v-model="value2" vertical height="200px"> </el-slider>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "demao08",
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value: [4, 8],
    };
  },
  methods: {
    formatTooltip(val) {
      // return val / 100;
      return val;
    },
  },
};
</script>