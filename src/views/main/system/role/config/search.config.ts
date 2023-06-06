import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  itemStyle: {
    padding: '10px 40px'
  },
  formItems: [
    {
      field: 'name',
      label: '角色',
      rules: [],
      placeholder: '请输入角色名称',
      type: 'input'
    },
    {
      field: 'intro',
      label: '权限介绍',
      rules: [],
      type: 'input',
      placeholder: '请输入权限介绍'
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
