import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Video from '@material-ui/icons/OndemandVideo';
import Button from '@material-ui/core/Button';
import authors from './authors'
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

class Publication extends React.Component {
    
    lastNameSort = (a,b) => {
        return a.split(" ").pop()[0] > b.split(" ").pop()[0]
    };

    buildAuthor = (author) => {
        if (authors[author]) {
            return <a key={author} className={"authorLink"} href={authors[author]} target="_blank">{author}</a>
        } else {
            return <span key={author}>{author}</span>
        }
    };

    getAuthors = (pub) => {
        let result = [];

        if (pub.authors.length === 1) {
            return [this.buildAuthor(pub.authors[0])]
        }


        let sortedAuthors = pub.authors.sort(this.lastNameSort);

        for (let [index, author] of sortedAuthors.slice(0, -1).entries()) {
            result.push(this.buildAuthor(author));
            result.push(<span key={index}>, </span>)
        }
        let lastAuthor = sortedAuthors.slice(-1)[0];

        result.push(<span> and </span>);
        result.push(this.buildAuthor(lastAuthor));
        return result;
    };

    render = () => {
        const props = this.props;
        

        return (<Card style={styles.pub}>
            <CardBody>
                <a className="title" href={props.pub.pdf} target="_blank">
                    {props.index}. {props.pub.title}
                </a>
                <span style={styles.date}>{props.pub.date}</span>
                <p style={styles.authors}>{this.getAuthors(props.pub)}</p>

                <div style={styles.location}>
                    <p style={{margin: 0}} dangerouslySetInnerHTML={{__html: props.pub.location}}></p>
                    {props.pub.journal ? <p style={{margin: 0}} dangerouslySetInnerHTML={{__html: props.pub.journal.text}}></p> : null}
                </div>

                <div style={{display: "inline-block", float:'right'}}>

                    {props.pub.pdf ? <a href={props.pub.pdf} target="_blank">
                        <Button style={styles.download} variant="contained" color="primary" aria-label="add">
                            PDF
                        </Button>
                    </a> : null}


                    {props.pub.journal ? <a href={props.pub.journal.url} target="_blank">
                        <Button style={styles.download} variant="contained" color="primary" aria-label="add">
                            Journal
                        </Button>
                    </a> : null}

                    {props.pub.video ? <a href={props.pub.video} target="_blank">
                        <Button style={styles.download} variant="contained" color="secondary" aria-label="add">
                            <Video/>
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
