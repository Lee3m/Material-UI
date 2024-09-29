import { TextField, Stack } from "@mui/material";

export const MaterialTextField = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField variant="outlined" label="Outlined"></TextField>
        <TextField variant="filled" label="Filled"></TextField>
        <TextField variant="standard" label="Standard"></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField required label="Required" />
        <TextField disabled label="Disabled"></TextField>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          helperText="Minimum 12 characters"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </Stack>
    </Stack>
  );
};
