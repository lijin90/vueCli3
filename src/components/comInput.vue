<template>
  <div class="comInput">
    <el-form
      :model="ruleForm"
      :rules="rule"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name" type="hidden">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" prop="value">
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
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="less"></style>
<script>
export default {
  name: "comInput",
  props: ["send", "rule"],
  data() {
    return {
      ruleForm: {
        name: "",
        value: ""
      }
    };
  },
  created() {
    console.log(this.send);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("childFn", this.ruleForm);
          console.log(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
