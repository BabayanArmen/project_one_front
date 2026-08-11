import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

interface LogoutDialogProps {
  open: boolean;
  onClose: () => void
}

export default function LogoutDialog(props: LogoutDialogProps) {
    const navigate = useNavigate();

  const handleClose = (logout: boolean) => {
    props.onClose();
    if (logout) {
        navigate("/")
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        sx={{
            '& .MuiDialog-paper': {
            width: '320px',
            maxWidth: '90%',
            },
        }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          {"Logout?"}
        </DialogTitle>
        
        <DialogActions>
          <Button onClick={() => handleClose(false)} autoFocus>
            No
          </Button>
          <Button onClick={() => handleClose(true)}>Yes</Button>
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
}
