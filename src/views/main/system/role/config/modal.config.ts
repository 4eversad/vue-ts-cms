import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名',
      rules: [],
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'intro',
      label: '角色介绍',
      rules: [],
      placeholder: '请输入角色介绍',
      type: 'input'
    }
  ],
  colLayOut: { span: 24 },
  itemStyle: {}
}
