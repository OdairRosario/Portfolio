import { Sora } from 'next/font/google'

export const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})