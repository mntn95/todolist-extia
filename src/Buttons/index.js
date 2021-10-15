//imports
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { UserContext } from "../userContext";

// styles
import "./buttons.scss";
// components

const Buttons = ({ inputFocus, sortTasks }) => {
  const userParameters = useContext(UserContext);
  const { upperCase, setUpperCase } = userParameters;
  const buttons = [
    {
      label: "Focus",
      onClick: inputFocus,
    },
    {
      label: "Sort",
      onClick: sortTasks,
    },
    {
      label: upperCase ? "Lower" : "Upper",
      onClick: () => setUpperCase(!upperCase),
    },
  ];
  return (
    <div>
      {buttons.map(({ label, onClick }) => (
        <Button
          style={{ margin: "0 1em" }}
          className={upperCase ? "upper" : "lower"}
          type="button"
          variant="contained"
          color="primary"
          onClick={onClick}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default Buttons;
