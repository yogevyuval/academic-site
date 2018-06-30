import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
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
    talk: {
        marginTop: '8px',
        marginBottom: '8px'
    }
};

class Talk extends React.Component {
    render = () => {
        const props = this.props;
        

        return (<Card style={styles.talk}>
            <CardBody>
                <span className="title">
                    {props.index}. {props.talk.title}
                </span>
                <span style={styles.date}>{props.talk.date}</span>

                <div>
                    <p style={{margin: 0}}>{props.talk.location}</p>
                    {props.talk.journal ? <p style={{margin: 0}}>{props.talk.journal.text}</p> : null}
                </div>

                <div style={{display: "inline-block", float:'right'}}>

                    {props.talk.video ? <a href={props.talk.video} target="_blank">
                        <Button style={styles.download} variant="contained" color="secondary" aria-label="add">
                            <Video/>
                        </Button>
                    </a> : null}


                    {props.talk.custom ? <a href={props.talk.custom.link} target="_blank">
                        <Button style={styles.download} variant="contained" color="secondary" aria-label="add">
                            {props.talk.custom.text}
                        </Button>
                    </a> : null}
                </div>


            </CardBody>
        </Card>);
    };
}

export default withStyles(styles)(Talk);
