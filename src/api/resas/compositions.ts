import useSWR, { type SWRConfiguration } from 'swr'
import useSWRInfinite, { type SWRInfiniteConfiguration } from 'swr/infinite'
import { resasGet } from '../fetcher'
import { type AxiosError } from 'axios'
import { type Composition } from '../../types'
import { useCallback } from 'react'

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

export const useCompositions = (
  prefCodes: number[],
  cityCodes?: string[],
  options?: SWRInfiniteConfiguration
) => {
  const { data: originalData, setSize, ...other } = useSWRInfinite<Composition, AxiosError>(
    (index: number, previousPageData: Composition) => {
      if (previousPageData && !previousPageData) return null
      const prefCode = prefCodes[index]
      const cityCode = cityCodes ? cityCodes[index] : '-'
      return `/api/v1/population/composition/perYear?cityCode=${cityCode}&prefCode=${prefCode}`
    },
    resasGet,
    options
  )

  const data = originalData?.map((composition, index) => {
    return {prefCode: prefCodes[index], ...composition}
  })

  const allLoad = useCallback(async () => {
    await setSize(prefCodes.length)
  }, [setSize, prefCodes.length])

  return { data, setSize, allLoad, ...other }
}
