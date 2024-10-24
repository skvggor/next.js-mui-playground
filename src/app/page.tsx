import { Box, List, ListItem, ListSubheader, Typography } from '@mui/material'
import Link from 'next/link'
import { useCallback } from 'react'

import { ILink } from './page.types'

export default function Home() {
  const links: ILink[] = [
    {
      id: 1,
      href: '/autocomplete-with-chips',
      label: 'Autocomplete with Chips',
    },
  ]

  const renderLinks = useCallback(
    (links: ILink[]) =>
      links.map((link) => (
        <ListItem key={link.id}>
          <Link href={link.href}>{link.label}</Link>
        </ListItem>
      )),
    [],
  )

  return (
    <Box>
      <Typography variant="h1">Home</Typography>

      <List subheader={<ListSubheader>Pages</ListSubheader>}>
        {renderLinks(links)}
      </List>
    </Box>
  )
}
