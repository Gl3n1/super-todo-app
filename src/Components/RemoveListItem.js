import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
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
});

function RemoveListItem(props) {
  const { classes, handleClick, loading } = props;
  return (
    <div className={classes.buttonContainer}>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={handleClick}>
        <RemoveIcon />
      </Fab>
      { loading ? <CircularProgress size={60} className={classes.fabProgress} /> : null}
    </div>
  );
}

RemoveListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RemoveListItem);
