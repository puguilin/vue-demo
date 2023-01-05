<!--

常用模版语法讲解
v-text 与 {{}} ：用来渲染纯文字
v-html ：用来渲染标签
v-bind：动态属性
v-once：元素中的变量只使用一次
v-if ：显示/隐藏重新渲染页面元素
v-show ：显示/隐藏元素，不重新渲染dom元素(display：none，来会切换显示隐藏)
v-on ：定义事件，例如：click 之类的
简写形式：v-on 以及 v-bind 等等的简写
动态属性：动态 给 属性名 或者 事件名 赋值
事件修饰符：阻止冒泡事件 等等的一些 语法糖

-->

<template>
  <div id="demao1">
    <h2>{{ message }}</h2>
    <h2 v-html="zimug"></h2>

    <!-- v-for循环数组  循环数组中有 2 个参数 
        参数1：item 每一项的值
        参数2：index索引 ，index可以不写
        注意：循环对象时   index 最好也写  不然会爆红
      使用 v-for循环 时，要添加 key属性 ，因为，向 循环的列表添加了一项数据，vue不会重新渲染整个列表，只会渲染最新添加的那项 ，
      为了做区分所以 加key属性做数据的区分 ，
      建议使用 item 或者一些唯一的值来做key ，
      不推荐使用 index ，因为 index 做 key 渲染列表时，如果有恰巧有 删除功能，删除了一项 item， 删除项 后的兄弟级会 自动顶到前面补位 ， 就会 导致程序出现bug 。
    -->

    <hr style="border: 2px solid #cfc" />
    <h2>
      下面是 v-for循环数组 循环数组中有 2 个参数 item 每一项的值 index索引
    </h2>
    {{ list }}
    <div v-for="(item, index) in list" :key="item">
      {{ item }} -- {{ index }}
    </div>

    <!-- 
      循环对象  循环对象中有3 个参数
      参数1：value每一项 键值对 的值
      参数2：key 对象的 key
      参数3：index 索引值
      注意：循环对象时   index 最好也写  不然会爆红
      使用 v-for循环 时，要添加 key属性 ，因为，向 循环的列表添加了一项数据，vue不会重新渲染整个列表，只会渲染最新添加的那项 ，
      为了做区分所以 加key属性做数据的区分 ，
      建议使用 item 或者一些唯一的值来做key ，
      不推荐使用 index ，因为 index 做 key 渲染列表时，如果有恰巧有 删除功能，删除了一项 item， 删除项 后的兄弟级会 自动顶到前面补位 ， 就会 导致程序出现bug 。

    -->
    <h2>下面是 v-for循环对象 循环对象中有3 个参数</h2>
    {{ listObject }}
    <div v-for="(value, key, index) in listObject" :key="value">
      对象的值是：{{ value }} 对象的键值是： {{ key }} 对象当前键值对的序号是
      {{ index }}
    </div>
    <h2>下面是 循环数字 v-for 与 v-if 同时使用</h2>
    {{ 5 }}
    <div v-for="key in 5" :key="key">
      <!-- v-fo 与 v-if 同时使用 -->
      <div v-if="key <= 2">小于等于二的就展示{{ key }}</div>
    </div>

    <hr style="border: 2px solid #cfc" />
    <!--  事件绑定

      参考：https://www.kancloud.cn/wangjiachong/vue_notes/2140867

      1、event问题 ：event 的部分场景，如何使用
      2、一个事件执行多个函数
      3、事件修饰符 ：解决 事件冒泡 等问题
      4、按键修饰符： 回车键 、 tab键 等等
      5、鼠标修饰符 ： 鼠标对应的左中右按键修饰符
      6、精确修饰符 ： 组合按键一起按才会触发方法
    -->

    <h2>事件绑定</h2>
    <!-- 如果我们要 额外传递参数 ，还要用到原生 event 对象时，在 实参 的地方传入一个 $event ， 形参 的地方接收一下即可，如下代码： -->
    <h2>原生 event 对象</h2>
    {{ counter
    }}<button @click="handleAddBtnevEntClick(2, $event)">
      传递 原生 event 对象
    </button>
    <!-- 在 vue 中有时候你想通过一个 点击事件同时执行2个或多个方法 时，你可以向下面代码一样，通过 逗号分隔 的形式来执行多个函数。 -->
    <h2>一个事件执行多个函数</h2>
    <button @click="handleAddBtnClick(), handleAddBtnClick2()">
      一个事件执行多个函数
    </button>
    <!-- 鼠标修饰符  鼠标修饰符 有 3 个： left 、 right 、 middle ，就拿 middle 举例：-->
    <h2>鼠标修饰符 这个有问题</h2>
    <button @click.middle="handleClick">鼠标修饰符 middle</button>

    <hr style="border: 2px solid #cfc" />

    <h2>表单中双向绑定指令的使用</h2>
    <!-- 输入框的值改变后，页面上的文字也会改变，文字改变后，输入框中的值也会改变 ，这就是 双向数据绑定 ，如果用 input框的 v-model ，就可以不用写value 属性了，直接用它就可以了。 -->
    <h2>input的双向数据绑定</h2>
    <div>
      {{ message }}
      <input v-model="message" />
    </div>

    <h2>v-model指令修饰符</h2>
    <!-- number修饰符 
        number修饰符可以做类型的转换 ，如果默认是 string 类型，输入值后 保存到变量中的值是 number 类型 。
      -->
    <h2>下面是number修饰符</h2>
    {{ typeof num }}
    <input v-model.number="num" type="number" />

    <!-- trim修饰符  trim修饰符的意思，就是去掉输入框前后的空格-->
    <h2>下面是trim修饰符 就是去掉输入框前后的空格</h2>
    {{ triMessage }}
    <input v-model.trim="triMessage" />

    <!-- lazy修饰符（懒加载修饰符） input 框 失去焦点 时候会触发 刷新数据的变化 。 -->
    <h2>lazy修饰符 input 框 失去焦点 时候会触发</h2>
    {{ messagelazy }}
    <input v-model.lazy="messagelazy" />

    <!-- textarea的双向数据绑定 -->
    <h2>textarea的双向数据绑定</h2>
    {{ message }}
    <textarea v-model="message" />
    <!-- 下面是checkbox 复选框多选框 -->
    <h2>下面是checkbox 复选框多选框</h2>
    jack<input type="checkbox" v-model="duoxuan" value="jack" /> dell<input
      type="checkbox"
      v-model="duoxuan"
      value="dell"
    />
    lee<input type="checkbox" v-model="duoxuan" value="lee" />

    <!-- checkbox的双向数据绑定  类型改为 checkbox ，然后绑定一个 布尔值的变量 即可实现 双向数据绑定 -->
    <h2>checkbox的双向数据绑定</h2>
    {{ checkboxMessage }}
    <input type="checkbox" v-model="checkboxMessage" />
    <!-- 多个checkbox的双向数据绑定   -->
    <h2>多个checkbox</h2>
    {{ checkboxMessage02 }}
    jack<input type="checkbox" v-model="checkboxMessage02" value="jack" />
    dell<input type="checkbox" v-model="checkboxMessage02" value="dell" />
    lee<input type="checkbox" v-model="checkboxMessage02" value="lee" />
    <!-- checkbox的自定义写法  checkbox 在 选中 以及 取消选中时候， 通过 true-value 、false-value 属性来 动态更改显示的文字 。  -->
    <h2>checkbox的自定义写法</h2>
    {{ message }}
    <input
      type="checkbox"
      v-model="message"
      true-value="Hello"
      false-value="world"
    />
    <!-- radio的双向数据绑定 radio 储存值只需要用 默认空字符串 储存即可 ，不需要向 checkbox 那样用 数组 ，因为 radio 只能选择一个值。  -->
    <h2>radio的双向数据绑定</h2>
    {{ radioMessage }}
    jack<input type="radio" v-model="radioMessage" value="jack" /> dell<input
      type="radio"
      v-model="radioMessage"
      value="dell"
    />
    lee<input type="radio" v-model="radioMessage" value="lee" />
    <!-- 下面是select单选 -->
    <h2>下面是select单选</h2>
    {{ select }}
    <select v-model="select">
      <option disable value="">请选择内容</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
    <!-- 下面是select可以多选 -->
    <h2>下面是select可以多选</h2>
    <!-- select多选 -->
    <h2>{{ mess }}</h2>
    <select v-model="mess" multiple>
      <option
        v-for="(item, key, index) in options"
        :key="index"
        :value="item.value"
      >
        {{ item.text }}{{ item.value }}
      </option>
    </select>
  </div>
</template>
​
<script>
export default {
  name: "demao1",
  data() {
    return {
      message: "Hello",
      zimug:
        '<a href="https://cloud.tencent.com/developer/article/1756121">学习v-htmml</a>',
      messagelazy: "懒加载",
      duoxuan: [],
      num: "123456",
      triMessage: "",
      list: ["dell", "lee", "teacher"],
      listObject: {
        name: "dell",
        lastName: "lee",
        job: "teacher",
      },
      mess: [],
      options01: [
        {
          text: "A",
          value: "A",
        },
        {
          text: "B",
          value: "B",
        },
        {
          text: "C",
          value: "C",
        },
      ],
      //  数据可以写成对象的形式
      options: [
        {
          text: "A",
          value: {
            value: "A",
          },
        },
        {
          text: "B",
          value: {
            value: "B",
          },
        },
        {
          text: "C",
          value: {
            value: "C",
          },
        },
      ],
      counter: 0,
      checkboxMessage: false,
      checkboxMessage02: [],
      radioMessage: "",
      select: "", // 单选
    };
  },
  //传递 原生 event 对象
  methods: {
    handleAddBtnevEntClick(num, event) {
      console.log("传递 原生 event 对象 " + event.target);
      this.counter += num;
    },
    //一个事件执行多个函数
    handleAddBtnClick() {
      alert("第一个事件");
    },
    handleAddBtnClick2() {
      alert("第二个事件");
    },
    //鼠标修饰符
    handleClick() {
      console.log("handleClick");
    },
  },
};
</script>