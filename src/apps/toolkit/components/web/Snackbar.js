import React from 'react'

import OutsideClickDetect from './OutsideClickDetect'

class Snackbar extends React.Component {
  render() {

    if (this.props.open){
        return (
            <OutsideClickDetect onOutsideClick={() => this.props.onRequestClose()} >
            <div style={this.styles.container}>{this.props.children}</div>
            </OutsideClickDetect>
        );
    }else{
        return null
    }
  }


}

const styles = {
    container: {
        minWidth: "250px", marginLeft: "-125px", backgroundColor: "#333",
        color: "#fff", textAlign: "center", borderRadius: "2px",
        padding: "16px", position: "fixed", zIndex: 1,
        left: "75%", bottom: "30px", fontSize: "17px",
    }
}

export default Snackbar