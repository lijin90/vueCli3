<template>
  <div class="我是menu2">
    我是menu2
    <el-form
      :model="ruleForm"
      :rules="rule"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <singleInput :ruleForm="ruleForm" :lableInput="lableInput" :InputName="你好"></singleInput>
      <comSelect :send="options2" :ruleForm="ruleForm"></comSelect>
      <singleInput :ruleForm="ruleForm" :lableInput="lableInput2" :InputName="你好2"></singleInput>
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
import comSelect from "@/components/comSelect.vue";
import singleInput from "@/components/singleInput.vue";
export default {
  name: "menu2",
  data() {
    return {
      lableInput: ["Input"],
      lableInput2: ["Input2"],
      ruleForm: {
        Input1: "",
        Input2: ""
      },
      // lableInput: [{
      //     label:'name1',
      //     prop:'input1',
      //     Input1:''
      // },
      // {
      //     label:'name2',
      //     prop:'input2',
      //     Input2:''
      // }],
      rule: {
        Input1: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        Input2: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        value: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ]
      },
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
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
  },
  components: {
    comSelect,
    singleInput
  }
};
</script>
