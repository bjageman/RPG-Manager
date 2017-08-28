import React from 'react'

import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'

import LoginDialog from './Dialog/Login'
import RegistrationDialog from './Dialog/Registration'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            openLogin: false,
            openRegistration: false
        };
    }

    handleLoginRequestClose = value => {
        this.setState({ openLogin: false });
    };

    handleRegistrationRequestClose = value => {
        this.setState({ openRegistration: false });
    };

    render(){
        return(
            <div id="login">
            <Button color={this.props.color} onClick={() => this.setState({ openLogin: true })}><Icon>person</Icon> Login / Sign Up</Button>
            <LoginDialog
                open={this.state.openLogin}
                openRegistration ={() => this.setState({ openRegistration: true, openLogin: false })}
                onRequestClose={this.handleLoginRequestClose}
                />
            <RegistrationDialog
                open={this.state.openRegistration}
                onRequestClose={this.handleRegistrationRequestClose}
                />
            </div>
        )
    }
}

export default Login