import useSWR, { type SWRConfiguration } from 'swr'
import { resasGet } from '../fetcher'
import { type AxiosError } from 'axios'
import { type Composition } from '../../types'

export const useComposition = (
  prefCode: number,
  cityCode: string = '-',
  options?: SWRConfiguration
) => {
  return useSWR<Composition, AxiosError>(
    `/api/v1/population/composition/perYear?cityCode=${cityCode}&prefCode=${prefCode}`,
    resasGet,
    options
  )
}
