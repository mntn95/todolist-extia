// imports
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// styles
import './tasks.scss';
// components

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      wordBreak: 'break-all',
    },
    width: '100%',
    borderRadius: '6px',
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Tasks = ({tasks}) => {
  const classes = useStyles();

  return (
    <List className={classes.root} component="nav">
      {tasks.map(({label, id}, index) => (
        <Fragment key={id}>
          <ListItem button>
            <ListItemText primary={label} />
          </ListItem>
          {index !== (tasks.length -1) && (<Divider />) }
        </Fragment>
        )
      )}
    </List>

);
}

export default Tasks;