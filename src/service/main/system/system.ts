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
