<template id="demao09">
  <div>
    <div>
      <!-- 日期时间选择器 
        通过设置type属性为datetime，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。
      -->
      <!-- 日期时间中文设置 -->

      <el-config-provider :locale="locale">
        <slot name="app"></slot>
      </el-config-provider>

      <!-- 日期时间 -->
      <hr style="border: 2px solid #cfc" />
      <h>日期时间选择器</h>
      <div>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="选择开始日期时间"
          >
          </el-date-picker>
          --
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择结束日期时间"
          >
          </el-date-picker>
        </div>
        <!-- 日期时间选择器  带快捷选项 -->
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value3"
            type="datetime"
            placeholder="选择开始日期时间"
            align="right"
            :picker-options="pickerOptions"
            :shortcuts="pickerOptions.shortcuts"
          >
          </el-date-picker>
          --
          <el-date-picker
            v-model="value4"
            type="datetime"
            placeholder="选择结束日期时间"
            align="right"
            :picker-options="pickerOptions"
            :shortcuts="pickerOptions.shortcuts"
          >
          </el-date-picker>
        </div>
      </div>

      <hr style="border: 2px solid #cfc" />
      <!-- 日期选择器 -->
      <h>日期选择器</h>
      <div>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="valueDate"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
            <!-- 日期选择 带快捷选项 -->
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="valueDate2"
            align="right"
            type="date"
            placeholder="选择日期"
            :disabled-date="disabledDate"
            :picker-options="pickerOptions02"
            :shortcuts="pickerOptions02.shortcuts"
          >
          </el-date-picker>
        </div>
      </div>

      <hr style="border: 2px solid #cfc" />
      <!-- 选择日期范围  在选择日期范围时，默认情况下左右面板会联动。
      如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动。 目前有问题
       -->
      <h>选择日期范围</h>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
          v-model="value6"
          type="daterange"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <!-- 选择日期范围 带快捷选项 -->
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
          :disabled-date="disabledDate"
          :picker-options="pickerOptions03"
          :shortcuts="pickerOptions03.shortcuts"
        >
        </el-date-picker>
      </div>

      <hr style="border: 2px solid #cfc" />
      <!-- 其他日期单位 -->
      <h>其他日期单位</h>
      <div class="block">
        <span class="demonstration">周</span>
        <el-date-picker
          v-model="valueweek"
          type="week"
          format="YYYY 第 ww 周"
          placeholder="选择周"
        >
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">月</span>
        <el-date-picker v-model="valuemonth" type="month" placeholder="选择月">
        </el-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <el-date-picker v-model="valueyear" type="year" placeholder="选择年">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">多个日期</span>
        <el-date-picker
          type="dates"
          v-model="valueoneortwo"
          placeholder="选择一个或多个日期"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="valueoneortwo2">多个月(有问题)</span>
        <el-date-picker
          type="months"
          v-model="valueoneortwo3"
          placeholder="选择一个或多个月"
        >
        </el-date-picker>
      </div>
      <div class="block">
        <span class="valueoneortwo4">多个年(有问题)</span>
        <el-date-picker
          type="years"
          v-model="valueoneortwo5"
          placeholder="选择一个或多个年"
        >
        </el-date-picker>
      </div>
    </div>
  </div>
</template>




<script>
//中文包
import zhCn from "element-plus/lib/locale/lang/zh-cn";
export default {
  name: "demao09",

  //时间中文格式
  setup(props, context) {
    let locale = zhCn;
    return { locale };
  },
  data() {
    return {
      zhCn,
      //日期时间快捷键
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            value: new Date(),
          },
          {
            text: "昨天",
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
          },
          {
            text: "一周前",
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
          },
           {
            text: "一月前",
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
              return date;
            },
          },

          {
            text: "上个月",
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
              return date;
            },
          },
          {
            text: "前三个月",
            value: () => {
              const date = new Date();

              date.setTime(date.getTime() - 3600 * 1000 * 24 * 90);
              return date;
            },
          },
        ],
      },
      value: "",
      value0: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",

      //日期快捷键
      pickerOptions02: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            value: new Date(),
          },
          {
            text: "昨天",
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
          },
          {
            text: "一周前",
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
          },

          {
            text: "上个月",
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
              return date;
            },
          },
          {
            text: "前三个月",
            value: () => {
              const date = new Date();

              date.setTime(date.getTime() - 3600 * 1000 * 24 * 90);
              return date;
            },
          },
        ],
      },
      valueDate: "",
      valueDate2: "",
      //日期范围快捷键
      pickerOptions03: {
        shortcuts: [
          {
            text: "上周",
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },

          {
            text: "上个月",
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },

          {
            text: "前三个月",
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30 * 3);
              return [start, end];
            },
          },

          {
            text: "最近六个月",
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30 * 6);
               return [start, end];
            },
          },

          {
            text: "今年至今",
            value: () => {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              return [start, end];
            },
          },
          
        ],
      },
      value6: "",
      value7: "",
      //其他日期时间
      valueweek: "",
      valuemonth: "",
      valueyear: "",
      valueoneortwo: "",
      valueoneortwo2: "",
      valueoneortwo3: "",
      valueoneortwo4: "",
      valueoneortwo5: "",
    };
  },

  methods: {},
};
</script>