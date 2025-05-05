import { flexStyles } from "./Table";

const tableBodyItemStyles = {
  fontSize: '14px !important',
  lineHeight: '17px',
  fontWeight: 500,
  color: '#212332',
  padding: '0px 13px',
  height: '60px',
};

const latestItemStyles = {
  position: "absolute",
  top: 0,
  left: "-30px",
  backgroundColor: "#136BE5",
  boxShadow: "inset 0px 3.27407px 10.5589px #5D9DF5",
  borderRadius: "20px",
  padding: "3px 13px",
  zIndex: 100,
};

const newLabelStyles = {
  fontSize: "9px",
  letterSpacing: "-0.02em",
  color: "#FFFFFF",
  lineHeight: "12px",
};

const actionButtonBoxStyles = {
  ...flexStyles,
  justifyContent: "space-between",
};

const buttonBoxStyles = (status) => {
  const green = status === "accepted" || status === "active";
  const blue = status === "pending" || status === "non-active";

  return {
    boxShadow: "1px 2px 3px rgba(70, 118, 251, 0.41)",
    width: "auto",
    maxWidth: "104px",
    ...flexStyles,
    justifyContent: "center",
    borderRadius: "7px",
    border: "1px solid",
    borderColor: green ? "#54D14D" : blue ? "#136BE5" : "#FF4343",
    height: "32px",

    "& p": {
      color: green ? "#54D14D" : blue ? "#136BE5" : "#FF4343",
      fontSize: "13px",
      lineHeight: "16px",
      letterSpacing: "-0.02em",
      minWidth: 0,
      fontWeight: 600,
      backgroundColor: "transparent !important",
    },
  };
};

const editButtonStyles = {
  backgroundColor: "transparent !important",
};

const eyeButtonStyles = {
  backgroundColor: "rgba(84, 209, 77, 0.1) !important",
  width: "30px",
  height: "30px",
  padding: 0,
  ...flexStyles,
  justifyContent: "center",
};

const trashButtonStyles = {
  backgroundColor: "rgba(255, 0, 0, 0.05) !important",
  width: "30px",
  height: "30px",
  padding: 0,
  ...flexStyles,
  justifyContent: "center",
};

const fontStyles = {
  fonstSize: "14px",
  lineHeight: "17px",
  letterSpacing: "-0.02em",
};

const validTextStyles = {
  ...fontStyles,
  color: "#54D14D",
};

const positiveResultTextStyles = {
  ...fontStyles,
  color: "#136BE5",
};

export {
  tableBodyItemStyles,
  latestItemStyles,
  newLabelStyles,
  actionButtonBoxStyles,
  buttonBoxStyles,
  editButtonStyles,
  eyeButtonStyles,
  trashButtonStyles,
  validTextStyles,
  positiveResultTextStyles,
};
