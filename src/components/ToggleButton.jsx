import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

const ToggleButton = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#fff'
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#f35c51',
    opacity: 1
  }
}))

export default ToggleButton
