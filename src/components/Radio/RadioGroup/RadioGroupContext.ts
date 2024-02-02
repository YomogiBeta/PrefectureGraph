import { createContext } from 'react'

type RadioGroupContextType = {
  name: string
		value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const RadioGroupContext = createContext<RadioGroupContextType>({
  name: '',
		value: undefined,
		onChange: () => {},
})

export default RadioGroupContext