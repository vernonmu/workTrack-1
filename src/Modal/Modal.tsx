import React from "react";
import { Dialog } from "@material-ui/core";

interface IProps {
  onClose: Function;
  open: boolean;
  Component: React.ReactNode;
}

export const Modal = (props: IProps) => {
  const { onClose, open, Component } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {Component}
    </Dialog>
  );
};
