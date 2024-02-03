import useSWR, { type SWRConfiguration } from 'swr'
import { resasGet } from '../fetcher'
import { type AxiosError } from 'axios'
import { type Prefecture } from '../../types'

export const usePrefectures = (options?: SWRConfiguration) => {
  return useSWR<Prefecture[], AxiosError>(
    '/api/v1/prefectures',
    resasGet,
    options
  )
}
