import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function YearSelector({ yearList }) {
  const [selectedYear, setSelectedYear] = React.useState(yearList[yearList.length - 1]);

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100, width: 100}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gestión</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedYear}
          label="Year"
          onChange={handleChange}
        >
          {yearList.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}