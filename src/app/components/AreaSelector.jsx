import { Autocomplete, TextField, Box } from '@mui/material'
import { US_STATES, DEFAULT_STATE } from '../lib/constants'

export const AreaSelector = ({ value, onChange, disabled = false }) => {
  const selectedState = US_STATES.find(state => state.code === value) || US_STATES.find(state => state.code === DEFAULT_STATE)

  return (
    <Box sx={{ minWidth: 200 }}>
      <Autocomplete
        value={selectedState}
        onChange={(event, newValue) => {
          onChange(newValue ? newValue.code : DEFAULT_STATE)
        }}
        options={US_STATES}
        getOptionLabel={(option) => `${option.name} (${option.code})`}
        disabled={disabled}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select State"
            placeholder="Choose your area"
            variant="outlined"
            size="small"
          />
        )}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            <Box>
              <Box sx={{ fontWeight: 600 }}>{option.name}</Box>
              <Box sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                {option.code}
              </Box>
            </Box>
          </Box>
        )}
        isOptionEqualToValue={(option, value) => option.code === value.code}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'background.paper',
          },
        }}
      />
    </Box>
  )
}
