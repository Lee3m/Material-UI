import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

/*  BUTTONS / ICONS / ICON BUTTONS 

    variants:
    text - use to grabe less attention
    contained - use to grab users attention and primary action eg register
    outlined - user for secondary action eg go back

    --------------------------------------------------------------------------
    attributes:
    variants, direction, color, size, startIcon, 
    endIcon, disableElevation, disableRipple, onClick
 */
export const MaterialButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button color="primary" variant="text">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="error" variant="outlined">
          Error
        </Button>
        <Button color="warning" variant="text">
          Warning
        </Button>
        <Button color="info" variant="contained">
          Info
        </Button>
        <Button color="success" variant="outlined">
          Success
        </Button>
      </Stack>
      <Stack display="block" direction="row" spacing={2}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton color="success" size="large">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
