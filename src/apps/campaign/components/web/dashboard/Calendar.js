import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { CardActions, CardContent } from 'material-ui/Card';
import Button from 'apps/toolkit/components/web/Button'
import Typography from 'material-ui/Typography'

import ReduxLink from 'apps/toolkit/links/Redux'

class CampaignDashboardCalendar extends React.Component {
    render(){
        const classes = this.props.classes
        const event = this.props.event
        return(
            <Grid item xs={12} sm={3} className={classes.container} >
                <CardContent>
                    <Typography type="headline" component="h2">
                        Upcoming Event
                    </Typography>
                    { event ?
                        <div>
                            <Typography component="p">
                                {event.name}
                            </Typography>
                        </div>
                    :
                        <Typography component="p">No Upcoming Events</Typography>
                    }
                </CardContent>
                <CardActions>
                    <ReduxLink campaignLink to="calendar">
                        <Button dense color="primary">
                            See Events
                        </Button>
                    </ReduxLink>
                </CardActions>
            </Grid>
        )
    }
}

export const styles = theme => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignDashboardCalendar));
