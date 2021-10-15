//imports
import Button from "@material-ui/core/Button";
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
      id: 1,
    },
    {
      label: "Sort",
      onClick: sortTasks,
      id: 2,
    },
    {
      label: upperCase ? "Lower" : "Upper",
      onClick: () => setUpperCase(!upperCase),
      id: 3,
    },
  ];
  return (
    <div>
      {buttons.map(({ label, onClick, id }) => (
        <Button
          key={id}
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
