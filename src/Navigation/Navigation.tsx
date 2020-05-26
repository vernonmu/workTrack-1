import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Modal } from "../Modal/Modal";
import { Track } from "../Track/Track";
import "./Navigation.css";

interface IProps {
  refresh: Function;
}

export const Navigation = (props: IProps) => {
  const { refresh } = props;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    refresh(true);
  };
  const menu = [
    {
      label: "Add Work",
      icon: <FaPlusSquare size={18} />,
      action: () => handleClickOpen(),
    },
  ];

  return (
    <React.Fragment>
      <div className="nav-container">
        <ul>
          {menu.map((el, idx) => (
            <li key={idx} onClick={el.action}>
              {el.icon}
            </li>
          ))}
        </ul>
      </div>
      <Modal
        open={open}
        onClose={onClose}
        Component={<Track onSubmit={onClose} />}
      />
    </React.Fragment>
  );
};
