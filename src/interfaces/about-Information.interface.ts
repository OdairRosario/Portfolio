// interfaces
export interface AboutInformation {
    title: string

    info: Information[]
}

export interface Information {
    title: string

    icons?: JSX.Element[]

    stage?: string
}