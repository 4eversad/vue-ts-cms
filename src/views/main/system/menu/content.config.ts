export const contentTableConfig = {
  title: '菜单列表',
  showIndexColumn: false,
  showSelectColumn: false,
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'permission', label: '权限按钮', minWidth: '100' },
    {
      prop: 'icon',
      label: '菜单icon',
      Width: '100'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '150',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '140',
      slotName: 'handler'
    }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  ShowFooter: false
}
