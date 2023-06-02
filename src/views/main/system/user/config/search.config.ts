import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  itemStyle: {
    padding: '10px 40px'
  },
  formItems: [
    {
      field: 'name',
      label: '用户名',
      rules: [],
      placeholder: '请输入',
      type: 'input'
    },
    {
      field: 'realName',
      label: '真实姓名',
      rules: [],
      placeholder: '请输入真实姓名',
      type: 'input'
    },
    {
      field: 'cellphone',
      label: '电话号码',
      rules: [],
      placeholder: '请输入电话号码',
      type: 'input'
    },
    {
      field: 'enable',
      label: '用户状态',
      rules: [],
      placeholder: '请选择用户状态',
      type: 'select',
      options: [
        { title: '启用', value: '1' },
        { title: '禁用', value: '0' }
      ]
    },

    {
      field: 'createAt',
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
