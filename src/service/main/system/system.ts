import ftRequest from '@/service'
import { IDataType } from '@/service/types'
export function getPageListData(url: string, queryInfo: any) {
  return ftRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

/**
 *
 * @param url
 *
 */
export function deletePageData(url: string) {
  return ftRequest.delete<IDataType>({
    url
  })
}
// 新增/编辑
export function createPageData(url: string, newData: any) {
  return ftRequest.post<IDataType>({
    url: url,
    data: newData
  })
}
export function editPageData(url: string, editData: any) {
  return ftRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
