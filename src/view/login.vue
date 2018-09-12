<template>
  <div class="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="container">
          <el-form-item prop="username">
              <el-input v-model="ruleForm.username" placeholder="请输入邮箱" prefix-icon="el-icon-message"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
              <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" prefix-icon="el-icon-view"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" prefix-icon="el-icon-view"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" class="submit">提交</el-button>
          </el-form-item>
          <el-form-item>
              <el-button @click="resetForm('ruleForm')" class="reset">重置</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username:'',
          pass: '',
          checkPass: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
          ],
          pass: [
          { validator: validatePass, trigger: 'blur' },
          {min:6,message: '请输入密码最低6位数', trigger: 'blur' }
          ],
          checkPass: [
          { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
                message: '登录成功',
                duration:1000,
                type: 'success'
              });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  min-width: 350pt;
  height: 100%;
  background-color: #122043;
  position: fixed;
  .container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 350pt;
    padding: 50pt 40pt 20pt 40pt;
    background-color: white;
    .submit {
      width: 100%;
    }
    .reset {
      width: 100%;
    }
  }
}
</style>
