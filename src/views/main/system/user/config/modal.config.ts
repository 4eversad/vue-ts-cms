import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'realname',
      label: '真实姓名',
      rules: [],
      placeholder: '请输入真实姓名',
      type: 'input'
    },
    {
      field: 'password',
      label: '密码',
      rules: [],
      placeholder: '请输入密码',
      type: 'password',
      isHidden: true
    },
    {
      field: 'cellphone',
      label: '电话号码',
      rules: [],
      placeholder: '请输入电话号码',
      type: 'input'
    },
    {
      field: 'departmentId',
      label: '选择部门',
      placeholder: '请选择部门',
      type: 'select',
      options: []
    },
    {
      field: 'roleId',
      label: '选择角色',
      placeholder: '请选择角色',
      type: 'select',
      options: []
    }
  ],
  colLayOut: { span: 24 },
  itemStyle: {}
}
