import { create } from 'zustand'

import { AppStore, IChip, IChipCollection } from './page.types'

export const appStore = create<AppStore>((set) => ({
  chips: [
    {
      id: 1,
      label: 'Chip 1',
    },
    {
      id: 2,
      label: 'Chip 2',
    },
    {
      id: 3,
      label: 'Chip 3',
    },
  ] as IChip[],

  setChip: (chip: IChip) =>
    set((state: IChipCollection) => ({
      chips: [...state.chips, chip],
    })),

  removeChip: (chip: IChip) =>
    set((state: IChipCollection) => ({
      chips: state.chips.filter((c) => c.id !== chip.id),
    })),
}))
