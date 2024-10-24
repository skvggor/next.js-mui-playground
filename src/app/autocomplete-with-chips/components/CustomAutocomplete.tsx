'use client'

import { IChipCollection } from '@/app/page.types'
import { Autocomplete, Box, TextField } from '@mui/material'
import React, { useState } from 'react'

import { IChip } from './CustomAutocomplete.types'

export default function CustomAutocomplete({ chips }: IChipCollection) {
  const [chipOptions, setChipOptions] = useState<IChip[]>(chips)
  const defaultChips: IChip[] = [chips[0], chips[2]]
  const [addNewChipLoading, setAddNewChipLoading] = useState<boolean>(false)

  const handleNewChip = (event: any, newValue: (IChip | string)[]) => {
    newValue.forEach((item) => {
      if (typeof item === 'string') {
        setAddNewChipLoading(true)
        const id = chipOptions.length + 1

        const requestSimulation = setTimeout(() => {
          const newChip = { id, label: item }
          setChipOptions((prevChips) => [...prevChips, newChip])
          setAddNewChipLoading(false)
          clearTimeout(requestSimulation)
        }, 3000)
      }
    })
  }

  return (
    <Box>
      <Autocomplete
        defaultValue={defaultChips}
        freeSolo
        getOptionLabel={(option) => option?.label}
        multiple
        onChange={handleNewChip}
        options={chipOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Chips"
            slotProps={{
              ...params.slotProps,
              endAdornment: addNewChipLoading ? 'loading' : null,
            }}
            // InputProps={{
            //   ...params.InputProps,
            //   endAdornment: addNewChipLoading ? 'loading' : null,
            // }}
          />
        )}
      />
    </Box>
  )
}
