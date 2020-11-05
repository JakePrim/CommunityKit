import { Validator } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: () => '不符合最小长度要求',
      max: () => '不符合最大长度要求',
      confirmed: () => '两次输入内容不一致',
      length: (field, args) => field + '长度要求:' + args
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      name: '账号',
      username: '账号',
      code: '验证码',
      repass: '密码'
    }
  }
}

Validator.localize(dictionary)
