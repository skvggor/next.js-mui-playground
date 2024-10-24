'use client'

import { Box } from '@mui/material'
import React from 'react'

import { appStore } from '../app.store'
import CustomAutocomplete from './components/CustomAutocomplete'

export default function AutocompleteWithChipsPage() {
  const { chips } = appStore()

  return (
    <Box>
      <CustomAutocomplete chips={chips} />
    </Box>
  )
}
