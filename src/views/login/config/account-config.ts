// 用户密码验证规则
export const rules = {
  // 用户名
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{1,10}$/,
      message: '用户名是1-10位的字母或数字',
      trigger: 'blur'
    }
  ],
  // 密码
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是大于3位的数字和字母',
      trigger: 'blur'
    }
  ],
  // 电话号码
  phoneNumber: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '手机号码格式有误',
      trigger: 'blur'
    }
  ],
  // 验证码
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码有误!',
      trigger: 'blur'
    }
  ]
}
