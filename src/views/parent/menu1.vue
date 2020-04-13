<template>
  <div>
    我是menu1
    <comInput :send="options2" :rule="rules" @childFn="parentFn"></comInput>
    <div id="huo">
      <ul id="list">
        <li v-for="item in myList">
          <input type="button" value="-" @click="sub(item)" />
          <strong>{{ item.number }}</strong>
          <input type="button" value="+" @click="add(item)" />
          单价：<em>{{ item.price }}</em> 小计：<span>{{
            item.number * item.price
          }}</span>
        </li>
      </ul>
      <p id="p">
        总价：<strong style="margin-right: 20px;">{{ total }}元</strong>
        最贵的单价是：<em>{{ bestValue }}元</em>
      </p>
      <input type="number" v-model="val1" />
      <input type="number" v-model="val2" />
      <input type="number" v-model="val3" />
      <h1>{{ num }}</h1>
    </div>
  </div>
</template>
<style lang="less"></style>

<script>
import comInput from "@/components/comInput.vue";
export default {
  name: "Home",
  data() {
    return {
      val1: 0,
      val2: 0,
      val3: 0,
      myList: [
        {
          number: 0,
          price: 23,
        },
        {
          number: 0,
          price: 14.5,
        },
        {
          number: 1,
          price: 8,
        },
        {
          number: 0,
          price: 20,
        },
      ],
      total: 0, //总价
      bestValue: 0, //最贵单价
      options2: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
      ],
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    num() {
      let self=this;
      let n = 0;
      n =parseInt(self.val1)  +parseInt(self.val2)+parseInt(self.val3);
      console.log(n);
      return n;
    },
  },
  methods: {
    parentFn(payload) {
      console.log(payload);
    },
    //相减
    sub: function (item) {
      item.number--;
      if (item.number <= 0) {
        item.number = 0;
      }
      this.count();
    },
    //相加
    add: function (item) {
      item.number++;
      this.count();
    },
    count: function () {
      var totalPrice = 0; //临时总价
      var best = 0; //临时最大单价
      this.myList.forEach(function (val, index) {
        totalPrice += val.number * val.price; //累计总价
        //判断最大单价
        if (val.price > best && val.number > 0) {
          best = val.price;
        }
      });
      this.total = parseFloat(totalPrice);
      this.bestValue = parseFloat(best);
    },
  },
  created: function () {
    this.count();
  },
  components: {
    comInput,
  },
};
</script>
