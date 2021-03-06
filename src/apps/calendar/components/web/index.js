import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';

import Loading from 'apps/toolkit/Loading'
import Read from './Read/'
import Search from './Read/Search'
import Create from './Create/'

class CampaignCalendar extends Component {
    constructor(props){
        super(props)
        
        this.props.getCalendar({ id: this.props.campaign.id })
    }

    render() {
        const classes = this.props.classes
        const calendar = this.props.calendar
        return (
        <div>
          { calendar && calendar.fetching ? <Loading /> : null }
          <div className={classes.container} >
          <Grid>
            <Grid item xs={12} >
                <Search />
            </Grid>
            <Grid item md={2}>
              { this.props.is_owner ? <Create /> : null }
            </Grid>
            <Grid item md={8}>
              {calendar.entries && calendar.entries.map((event, i) => (
                <div key = {event.id} className = "campaign-event">
                    <Read event = {event} />
                    <Divider />
                </div>
              ))}
              </Grid>
            </Grid>
          </div>
      </div>
        );
    }
}

export const styles = theme => ({
  container:{
      marginTop: "1%",
      marginBottom: "1%",
      marginLeft:"5%",
      marginRight: "5%"
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignCalendar));
