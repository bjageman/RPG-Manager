import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import Dialog from 'apps/toolkit/components/web/Dialog'

import TextField from 'material-ui/TextField';
import Button from 'apps/toolkit/components/web/Button';

import { withStyles } from 'material-ui/styles';

class EntryCreateDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
        this.state = {
            name: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave() {
        this.props.saveCampaign({
            access_token: this.props.user.access_token,
            name: this.state.name,
            author: this.props.user,
            campaign_id: this.props.campaign ? this.props.campaign.id: null,
        })
        this.props.onRequestClose()
    }

    render(){
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
            >
                <TextField
                  id="title"
                  label="Title"
                  name="name"
                  fullWidth
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <Button onClick={this.handleSave}>
                  Save Campaign
                </Button>
            </Dialog>
        )
    }
}

export const styles = theme => ({
  dialog: {
    width: 600,
  },
  flex: {
    flex: 1,
  },
  title:{
    color: "white"
},
  editor: {
      width: 600
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EntryCreateDialog))
