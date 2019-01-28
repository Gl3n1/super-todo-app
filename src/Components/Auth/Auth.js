import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '300px',
    margin: '50px auto'
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  button: {
    marginTop: '20px'
  }
});

class PaperSheet extends React.Component {
  state = {
    registrationType: '',
  };

  handleChange = event => {
    this.setState({ registrationType: event.target.value });
  };

  handleSubmit = e => {
    if(this.state.registrationType === 'public') {
      
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={3}>
          <Typography variant="h6" component="h6">
            Registration
          </Typography>
          <form onSubmit={this.handleSubmit()}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="Registration"
              name="Registration"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="App" control={<Radio />} label="Public" />
              <FormControlLabel value="private" disabled control={<Radio />} label="Private" />
              <FormControlLabel value="local" disabled control={<Radio />} label="Local" />
            </RadioGroup>
          </FormControl>
          <br />
          <Link to={`/${this.state.registrationType}`}>
            <Button variant="contained" color="primary" className={classes.button}>
              Select
            </Button>
          </Link>
          </form>
        </Paper>
      </div>
    );
  }
  
}

export default withStyles(styles)(PaperSheet);