export type Prefecture = {
  prefCode: number
  prefName: string
}

export type Composition = {
  boundaryYear: number
  data: Array<{
    label: string
    data: Array<{
      year: number
      value: number
      rate?: number
    }>
  }>
}
