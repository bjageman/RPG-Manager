import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import TextField from 'material-ui/TextField';
import Button from 'apps/toolkit/components/web/Button';


import { withStyles } from 'material-ui/styles';

import { stateToHTML } from 'draft-js-export-html';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';

import Dialog from 'apps/toolkit/components/web/Dialog'
import Editor from 'apps/toolkit/editor/'

class EntryCreateDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
        if (this.props.entry) {
            const blocksFromHTML = convertFromHTML(this.props.entry.content);
            const state = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
            );
            this.state = {
                editorState: EditorState.createWithContent(state),
                name: this.props.entry.name,
                content: this.props.entry.content,
            };
        }else{
            this.state = {
                editorState: EditorState.createEmpty(),
                name: "",
                content: "",
            };
        }
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
            content: stateToHTML(editorState.getCurrentContent()),
        });
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave() {
        this.props.saveJournalEntry({
            access_token: this.props.user.access_token,
            name:this.state.name,
            content:this.state.content,
            campaign_id: this.props.campaign.id,
            author_id: this.props.user.id,
            entry_id: this.props.entry ? this.props.entry.id: null,
        })
        this.props.onRequestClose()
    }

    render(){
        const entry = this.props.entry || {name: "", content: ""}
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
                <Editor
                    entry = {entry}
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    handleInputChange={this.handleInputChange}
                    />
                <Button onClick={this.handleSave}>
                  Save As Draft
                </Button>
                <Button onClick={this.handleSave}>
                  POST
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
