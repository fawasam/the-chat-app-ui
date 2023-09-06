import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slide,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ThemeDialog = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        sx={{ p: 4 }}
        keyMounted
        TransitionComponent={Transition}
      >
        <DialogTitle>Choose Theme</DialogTitle>
        <FormControl spacing={2} sx={{ ml: 4, mt: 4 }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Light" control={<Radio />} label="Light" />
            <FormControlLabel value="Dark" control={<Radio />} label="Dark" />
            <FormControlLabel
              value="System Default"
              control={<Radio />}
              label="System Default"
            />
          </RadioGroup>
        </FormControl>
        <DialogActions>
          <Button variant={"contained"} onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ThemeDialog;
