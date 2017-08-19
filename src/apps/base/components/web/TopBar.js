import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

//Material-UI
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { blue } from 'material-ui/colors';

import Login from 'apps/user/components/web/login/index'
import InvisibleLink from 'apps/toolkit/InvisibleLink'
import Tools from './tools/'

import myConfig from 'config.js';

class TopBar extends React.Component {
    render(){
        const brandName = "RPG Manager"
        const classes = this.props.classes
        const user = this.props.user
        //const user = data[0].owner
        return(
            <AppBar className={classes.topbar} position="static">
                <Toolbar>
                  <Typography type="title" color="inherit" className={classes.flex}>
                    <InvisibleLink to="/">{brandName} - {myConfig.VERSION}</InvisibleLink>
                  </Typography>
                  { user ? <Tools /> : <Login color="contrast"/> }
                </Toolbar>
            </AppBar>
        )
    }
}


const styleSheet = createStyleSheet('TopBar', {
  topbar: {
      backgroundColor:blue[500],
  },
  flex: {
    flex: 1,
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(TopBar));