import React from 'react'
import Button from 'apps/toolkit/components/web/Button';


import Dialog from './Dialog'

class CreateCharacter extends React.Component {
    constructor(props){
        super(props)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.state = {
            open: false,
        }
    }

    handleRequestClose() {
        this.setState({
            open: false
        })
    }

    render(){
        
        return(
            <div>
            <Button
                raised
                color="primary"
                onClick = {() => this.setState({open: true})}
                >
            Create Character
            </Button>
            <Dialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export default (CreateCharacter)
