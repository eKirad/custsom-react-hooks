import { useEffect, useRef } from 'react'

type Args = {
    callback: () => void
}

export const useClickOutside = ({ callback }: Args) => {
    const ref = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const handleClick = (event: Event) => {
            const isOutsideClick = !ref?.current?.contains(event.target as Node)
            if (isOutsideClick) callback()
        }

        window.addEventListener('click', handleClick)

        return () => window.removeEventListener('click', handleClick)
    }, [callback])

    return ref
}
