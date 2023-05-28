import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  itemStyle: {
    padding: '10px 40px'
  },
  formItems: [
    {
      field: 'id',
      label: 'id',
      rules: [],
      placeholder: '请输入',
      type: 'input'
    },
    {
      field: 'name',
      label: '用户名',
      rules: [],
      placeholder: '请输入',
      type: 'input'
    },
    {
      field: 'password',
      label: '密码',
      rules: [],
      placeholder: '请输入',
      type: 'password'
    },
    {
      field: 'sport',
      label: '爱好',
      rules: [],
      placeholder: '请输入',
      type: 'select',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      field: 'createTime',
      label: '创建时间',
      rules: [],
      placeholder: '请输入',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
