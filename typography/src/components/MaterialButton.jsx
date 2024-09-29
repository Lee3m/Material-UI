import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import { useState, useEffect } from "react";

/*  BUTTONS / ICONS / ICON BUTTONS / BUTTON GROUPS

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
  const [format, setFormat] = useState("");

  const handleFormatChange = (e, updatedFormat) => {
    setFormat(updatedFormat);
  };

  useEffect(() => {
    console.log(format);
  }, [format]);

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
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          color="warning"
          aria-label="button group"
          orientation="vertical"
          size="small"
        >
          <Button>Left</Button>
          <Button
            onClick={() => {
              alert("Middle Button Pressed");
            }}
          >
            Middle
          </Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          color="primary"
          onChange={handleFormatChange}
          exclusive
          value={format}
          orientation="vertical"
        >
          <ToggleButton value="bold" sx={{ color: "white" }}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" sx={{ color: "white" }}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" sx={{ color: "white" }}>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
