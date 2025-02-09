import { useRef } from 'react'

export const useInputFocus = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return { inputRef, focusInput }
}
