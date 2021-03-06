import React from 'react'

// import Dialog, {DialogContent} from 'material-ui/Dialog'
import Dialog from 'apps/toolkit/components/web/Dialog'

class CampaignMapDialog extends React.Component {
    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const map = this.props.map
        return (
            <Dialog
                open={this.props.open}
                onRequestClose={this.handleRequestClose} >
                <img style={styles.map} src={map.image.url} alt={map.name} />
            </Dialog>
        )
    }
}

const styles = {
  map: {
      width: "100%"
  },
};

export default CampaignMapDialog
