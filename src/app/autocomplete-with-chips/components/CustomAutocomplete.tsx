'use client'

import { IChipCollection } from '@/app/page.types'
import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteRenderInputParams,
  Box,
  Chip,
  TextField,
} from '@mui/material'
import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react'
import { Imports } from 'resolve.exports'

import { IChip } from './CustomAutocomplete.types'

import Value = Imports.Value

export default function CustomAutocomplete({ chips }: IChipCollection) {
  const [chipOptions, setChipOptions] = useState<IChip[]>(chips)

  const [defaultChips, setDefaultChips] = useState<IChip[]>([
    chips[0],
    chips[2],
  ])

  const handleAddNewChip = useCallback(
    (
      _: SyntheticEvent<Element, Event>,
      value: (string | IChip)[],
      reason: AutocompleteChangeReason,
    ) => {
      if (reason === 'removeOption') {
        setDefaultChips(defaultChips.filter((chip) => chip.id !== value?.id))
      } else if (reason === 'selectOption') {
        setDefaultChips(value as IChip[])
      } else if (reason === 'createOption') {
        setDefaultChips([
          ...defaultChips,
          {
            id: Math.floor(Math.random() * 9000) + 1000,
            label: value ? (value[value.length - 1] as string) : 'Chip',
          },
        ])
      }
    },
    [defaultChips],
  )

  const renderTags = useCallback(
    (chips: IChip[]) => {
      return chips.map((chip) => (
        <Chip
          key={chip.id}
          label={chip.label}
          onDelete={(event) => {
            setDefaultChips(defaultChips.filter((c) => c.id !== chip.id))
          }}
        />
      ))
    },
    [defaultChips],
  )

  const renderInput = useCallback(
    (params: AutocompleteRenderInputParams) => (
      <TextField
        {...params}
        label="Chips"
        // onKeyDown={(event) =>
        //   handleAddNewChipWithEnterKey(event, params.inputProps.value)
        // }
      />
    ),
    [],
  )

  useEffect(() => {
    console.log('defaultChips', defaultChips)
  }, [defaultChips])

  return (
    <Box>
      <Autocomplete
        freeSolo
        getOptionLabel={(option: Value) => option.label ?? option}
        multiple
        onChange={handleAddNewChip}
        options={chipOptions}
        renderInput={renderInput}
        renderTags={renderTags}
        value={defaultChips}
      />
    </Box>
  )
}
