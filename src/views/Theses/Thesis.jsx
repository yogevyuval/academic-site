import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Video from '@material-ui/icons/OndemandVideo';
import Button from '@material-ui/core/Button';
import authors from './authors'
import './theses.css'

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
    subtitle: {
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

class Publication extends React.Component {

    render = () => {
        const props = this.props;
        

        return (<Card style={styles.pub}>
            <CardBody>
                <a className="title" href={props.pub.pdf} target="_blank">
                    {props.pub.title}
                </a>
                <span style={styles.date}>{props.pub.date}</span>
                <p></p>

                <div style={styles.location}>
                <p className="title" style={{margin: 0}}>{props.pub.subtitle}</p>
                    <p style={{margin: 0}}>{props.pub.location}</p>
                </div>


                <div style={{display: "inline-block", float:'right'}}>

                    {props.pub.pdf ? <a href={props.pub.pdf} target="_blank">
                        <Button style={styles.download} variant="contained" color="primary" aria-label="add">
                            PDF
                        </Button>
                    </a> : null}

                    {props.pub.custom ? <a href={props.pub.custom.link} target="_blank">
                        <Button style={styles.download} variant="contained" color="secondary" aria-label="add">
                            {props.pub.custom.text}
                        </Button>
                    </a> : null}
                </div>

            </CardBody>
        </Card>);
    };
}

export default withStyles(styles)(Publication);
