<template id="demao07">
  <div>
    <!-- >Switch 开关 绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色-->
    <div>
      <h>Switch 开关 </h>
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </div>

    <!-- >Switch 开关 文字描述  使用active-text属性与inactive-text属性来设置开关的文字描述。-->
    <div>
      <div>
        <h>Switch 开关 文字描述 </h>
      </div>
      <el-switch
        v-model="value1"
        active-text="按月付费"
        inactive-text="按年付费"
      >
      </el-switch>
      <el-switch
        style="display: block"
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费"
      >
      </el-switch>
    </div>

    <!-- Switch 禁用状态 。设置disabled属性，接受一个Boolean，设置true即可禁用。 -->
    <div>
      <h>Switch --禁用状态 </h>
      <el-switch v-model="value3" disabled> </el-switch>
      <el-switch v-model="value4" disabled> </el-switch>
    </div>
  </div>
</template>


<script>
export default {
  name: "demao07",
  data() {
    return {
      value: true,
      value1: true,
      value2: true,
      value3: true,
      value4: false,
    };
  },
  methods: {},
};
</script>