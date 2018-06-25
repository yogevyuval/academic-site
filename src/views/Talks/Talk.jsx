import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Video from '@material-ui/icons/OndemandVideo';
import Button from '@material-ui/core/Button';
import './publication.css'

const styles = {
    authors: {
        margin: '2px'
    },
    location: {
        marginBottom: '18px',
        color: 'darkblue',
        display: 'inline-block',
        fontWeight: 400
    },
    download: {
        margin: '10px'
    },
    date: {
        float: 'right',
        marginRight: '16px',
        fontSize: '15px'
    },
    pub: {
        marginTop: '8px',
        marginBottom: '8px'
    }
};

class Talk extends React.Component {
    render = () => {
        const props = this.props;
        

        return (<Card style={styles.pub}>
            <CardBody>
                
            </CardBody>
        </Card>);
    };
}

export default withStyles(styles)(Talk);
