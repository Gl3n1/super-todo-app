import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function RemoveListItem(props) {
  const { classes, handleClick } = props;
  return (
    <div>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={handleClick}>
        <RemoveIcon />
      </Fab>
    </div>
  );
}

RemoveListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RemoveListItem);
