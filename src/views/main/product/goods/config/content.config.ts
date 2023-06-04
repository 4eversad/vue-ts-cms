export const contentTableConfig = {
  title: '商品列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '100',
      slotName: 'oldPrice'
    },
    { prop: 'newPrice', label: '现价', minWidth: '100', slotName: 'newPrice' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100',
      slotName: 'image'
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
  ]
}
