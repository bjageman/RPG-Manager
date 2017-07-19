import React from 'react'
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import { blue } from 'material-ui/colors';

class CampaignTabBar extends React.Component {
    render(){
        const classes = this.props.classes
        return(
            <AppBar position="static" className={classes.tabbar}>
              <Tabs
                  index={this.props.index}
                  onChange={this.props.handleTabChange}
                  scrollable
                  scrollButtons="on"
                  >
                <Tab label="Home" />
                <Tab label="Journal" />
                <Tab label="Characters" />
                <Tab label="Wiki" />
                <Tab label="Maps" />
                <Tab label="Calendar" />
              </Tabs>
            </AppBar>
        )
    }
}

const styleSheet = createStyleSheet('CampaignTabBar', {
  tabbar: {
    color: "black",
    backgroundColor:blue[200]
  },
});

export default withStyles(styleSheet)(CampaignTabBar)
