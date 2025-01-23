import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const Loading = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <CircularProgress />
    </Box>
  )
}
