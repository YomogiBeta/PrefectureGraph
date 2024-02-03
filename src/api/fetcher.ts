import resasApiClient from './resasApiClient'

export const resasGet = async (url: string) =>
  await resasApiClient.get(url).then(res => res.data.result)
