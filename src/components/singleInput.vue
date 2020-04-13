<template>
  <div class="comInput">
    <el-form-item :label="InputName" :prop="lableInput[0]" >
     <el-input v-model="ruleForm.input2" placeholder="请输入内容"></el-input>
    </el-form-item>
    <!-- <el-form-item :label="item.label" :prop="item.prop" v-for="item in lableInput">
     <el-input v-model="item.input" placeholder="请输入内容"></el-input>
    </el-form-item> -->
  </div>
</template>
<style lang="less"></style>
<script>
export default {
  name: "comSelect",
props: ["ruleForm","lableInput","InputName"],
  data() {
    return {
      
    };
  },
  created() {
    console.log(this.lableInput);
  },
  methods: {}
};
</script>
