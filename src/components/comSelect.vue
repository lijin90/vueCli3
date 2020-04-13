<template>
  <div class="comInput">
    <el-form-item label="活动形式" prop="value">
      <el-select v-model="ruleForm.value" placeholder="请选择">
        <el-option
          v-for="item in send"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
  </div>
</template>
<style lang="less"></style>
<script>
export default {
  name: "comSelect",
  props: ["send","ruleForm"],
  data() {
    return {
     
    };
  },
  created() {
    console.log(this.send,this.ruleForm);
  },
  methods: {}
};
</script>
