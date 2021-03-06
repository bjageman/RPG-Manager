import React from 'react'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles';

class UserProfileBanner extends React.Component {
    render() {
        const { user, classes } = this.props
        return (
        <Grid className={classes.container} container gutter={24}>
          <Grid item sm={2} className={classes.avatarContainer}>
              <img className={classes.avatar} src={user.avatar} alt={user.username}/>
          </Grid>
          <Grid sm={8}>
              <Typography type="headline">
              {user.first_name} {user.last_name}
              </Typography>
              <Typography type="subheading">
              {user.username}
              </Typography>
          </Grid>
        </Grid>
        )
    }
}
export const styles = theme => ({  container: {
    paddingTop: "2%",
    paddingLeft: "5%",
    paddingBottom: 20,
  },
  avatarContainer: {
      maxWidth: 200,
      maxHeight: 200,
  },
  avatar: {
      height: "100%"
  }
});

export default withStyles(styles)(UserProfileBanner)
