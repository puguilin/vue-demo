<template id="demao11">
  <div>
    <!-- 日期时间中文设置 -->

    <el-config-provider :locale="locale">
      <slot name="app"></slot>
    </el-config-provider>
    <div>
      <!-- Form 表单-->
      <hr style="border: 2px solid #cfc" />
      <h>Form 表单</h>
      <div>
        <!--典型表单  在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，
      表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker 
      -->
        <h>典型表单</h>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 行内表单 当垂直方向空间受限且表单较简单时，可以在一行内放置表单。 设置 inline 属性可以让表单域变为行内的表单域-->
      <hr style="border: 2px solid #cfc" />
      <h>行内表单</h>
      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <hr style="border: 2px solid #cfc" />
      <!-- 对齐方式  通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left，当设为 top 时标签会置于表单域的顶部-->
      <h>对齐方式</h>
      <div>
        <el-radio-group v-model="labelPosition" size="small">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px"></div>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <!-- 表单校验 
      Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可。
      校验规则参见 async-validator
      -->
      <hr style="border: 2px solid #cfc" />
      <h>表单校验</h>
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="ruleForm.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 动态增减表单项 -->
      <hr style="border: 2px solid #cfc" />
      <h>动态增减表单项</h>
      <div>
        <el-form
          :model="dynamicValidateForm"
          ref="dynamicValidateForm"
          label-width="100px"
          class="demo-dynamic"
        >
          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              {
                type: 'email',
                message: '请输入正确的邮箱地址',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'域名' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true,
              message: '域名不能为空',
              trigger: 'blur',
            }"
          >
            <el-input v-model="domain.value"></el-input
            ><el-button @click.prevent="removeDomain(domain)">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')"
              >提交</el-button
            >
            <el-button @click="addDomain">新增域名</el-button>
            <el-button @click="resetForm('dynamicValidateForm')"
              >重置</el-button
            >
            <el-button @click="getAllData()">查询api</el-button>
            <el-input v-model="dataResult"></el-input>
            <el-button @click="insertObject()">新增学生api 参数是对象 </el-button>
            <el-button @click="insertMap()">新增学生api 参数map </el-button>
            <el-button @click="getById()">按条件查询学生api</el-button>
            <el-input v-model="dataResultById"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>




<script>
//中文包
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import * as api from "@/api/api";

export default {
  name: "demao11",
  //时间中文格式
  setup(props, context) {
    let locale = zhCn;
    return { locale };
  },

  data() {
    return {
      zhCn,
      //表单域
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      //行内表单域
      formInline: {
        user: "",
        region: "",
      },
      //对齐方式
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },

      //表单校验
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      //动态增删
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],
        email: "",
      },
      //调用接口返回数据
      dataResult: "",
      dataResultById: "",
    };
  },

  methods: {
    onSubmit() {
      console.log("submit!");
    },
    //表单校验
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //动态增删
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now(),
      });
    },

    // 接口调用 按条件查询查询学生
    getAllData() {
      api
        .getAllData()
        .then((res) => {
          console.log("接口调用成功");
          (this.dataResult = JSON.stringify(res.data)), console.log(res.data);
        })
        .catch(function (error) {
          console.log("接口调用失败");
          console.log("error= " + error);
          console.log(error);
        });
    },

 //新增学生 参数是对象
    async insertObject() {
     
      let param = {
        SNO: 10,
        SNAME: "测试对象参数 新增前端",
        remark: "备注对象",
        SSEX: "F",
      };

      api.insertObject(param)
      .then((res) => {
        debugger
        console.log("测试对象参数 新增前端,接口调用成功");
        this.dataResultById = JSON.stringify(res.data)
         console.log(res.data);
      });
    },

    //新增学生 参数是map
    async insertMap() {
     
      let param = {
        SNO: 11,
        SNAME: "测试map参数 新增前端",
        remark: "备注map",
        SSEX: "F",
      };

      api.insertMap(param)
      .then((res) => {
        debugger
        console.log("新增学生 参数是map,接口调用成功");
        this.dataResultById = JSON.stringify(res.data)
         console.log(res.data);
      });
    },
    //按条件查询学生
    async getById() {
      let param = {
        id: 42,
      };
      api.getById(param).then((res) => {
        console.log("按条件查询学生 接口调用成功");
        (this.dataResultById = JSON.stringify(res.data)), console.log(res.data);
      });
    },
  },
};
</script>

<style>
</style>