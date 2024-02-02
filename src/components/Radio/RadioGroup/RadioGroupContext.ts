import { createContext } from 'react'

type RadioGroupContextType = {
  name: string | undefined
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const RadioGroupContext = createContext<RadioGroupContextType>({
  name: undefined,
  value: undefined,
  onChange: () => {}
})

export default RadioGroupContext
