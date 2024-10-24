export interface IChip {
  id: number
  label: string
}

export interface IChipCollection {
  chips: IChip[]
}

export interface AppStore {
  chips: IChip[]
  setChip: (chip: IChip) => void
  removeChip: (chip: IChip) => void
}

export interface ILink {
  id: number
  href: string
  label: string
}
