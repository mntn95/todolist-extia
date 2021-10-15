//imports
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// styles
import "./buttons.scss";
// components

const Buttons = ({ upperCase, setUpperCase, inputFocus, sortTasks }) => (
  <div>
    <Button
      style={{ margin: "0 1em" }}
      className={upperCase ? "upper" : "lower"}
      type="button"
      variant="contained"
      color="primary"
      onClick={inputFocus}
    >
      Focus
    </Button>
    <Button
      style={{ margin: "0 1em" }}
      className={upperCase ? "upper" : "lower"}
      type="button"
      variant="contained"
      color="primary"
      onClick={sortTasks}
    >
      Sort
    </Button>
    <Button
      style={{ margin: "0 1em" }}
      className={upperCase ? "upper" : "lower"}
      type="button"
      variant="contained"
      color="primary"
      onClick={() => setUpperCase(!upperCase)}
    >
      {upperCase ? "Lower" : "Upper"}
    </Button>
  </div>
);

export default Buttons;
