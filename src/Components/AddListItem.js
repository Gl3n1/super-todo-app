import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    position: 'absolute',
    left: '0'
  },
  buttonContainer: {
    position: 'relative'
  },
  fabProgress: {
    color: 'green',
    position: 'absolute',
    top: '-3px',
    left: '-2px',
    margin: '8px',
    zIndex: 1
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function AddListItem(props) {
  const { classes, addItem, loading } = props;
  return (
    <div className={classes.buttonContainer}>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={addItem}>
        <AddIcon />
      </Fab>
      { loading ? <CircularProgress size={60} className={classes.fabProgress} /> : null}
    </div>
  );
}

AddListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddListItem);