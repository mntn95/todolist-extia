//imports
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// styles
import './form.scss';
// components

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '8px 0',
      width: '100%',
    },
    '& > button': {
      padding: '0.6rem 0',
    },
    '& > input': {
      color: 'white',
    }
  },
}));

const Form = ({onInputChange, inputValue, onSubmit}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    const { value } = e.target;
    onInputChange(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form autoComplete="off" className={`${classes.root} form`} onSubmit={handleSubmit}>
      <TextField
        id="filled-basic"
        label="Filled"
        className="form--input"
        label="New Todo"
        variant="filled"
        value={inputValue}
        onChange={handleChange}
        />
      <Button className="form--button" type="submit" variant="contained" color="primary">
        Add ToDo
      </Button>
    </form>
    );
}

export default Form;