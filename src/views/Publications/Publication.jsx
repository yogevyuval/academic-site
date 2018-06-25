import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Save from '@material-ui/icons/PictureAsPdf';
import Button from '@material-ui/core/Button';
const authors = {"Merav Parter": "google.com", "Moni Naor": "http://www.yahoo.com"};


const styles = {
  title: {
    fontWeight: 500,
    fontSize: '16px',
    margin: '2px'
  },
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
    float: 'right',
    margin: '10px'
  },
  date: {
    float: 'right',
    marginRight: '16px'
  },
  pub: {
    marginTop: '8px',
    marginBottom: '8px'
  }
};

class Publication extends React.Component {

  buildAuthor = (author) => {
    console.log(authors[author])
    if (authors[author]) {
      return <a href={authors[author]} target="_blank">{author}</a>
    } else {
      return <span>{author}</span>
    }
  };

  getAuthors = (pub) => {
    let result = [];

    if (pub.authors.length === 1) {
      return [this.buildAuthor(pub.authors[0])]
    }


    let sortedAuthors = pub.authors.sort();

    for (let [index, author] of sortedAuthors.slice(0, -1).entries()) {
      result.push(this.buildAuthor(author));
      result.push(<span>, </span>)
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
        <a href={props.pub.link} target="_blank">
        <span style={styles.title}>{props.pub.title}</span>
        </a>
        <span style={styles.date}>{props.pub.date}</span>
        <p style={styles.authors}>{this.getAuthors(props.pub)}</p>
        <p style={styles.location}>{props.pub.location}</p>
        <a href={props.pub.pdf} target="_blank">
		  <Button style={styles.download} variant="contained" color="secondary" aria-label="add" className={classes.button}>
            Journal
          </Button>
		  </a>
		  <a href={props.pub.pdf} target="_blank">
          <Button style={styles.download} variant="contained" color="primary" aria-label="add" className={classes.button}>
            PDF
          </Button>
        </a>
      </CardBody>
    </Card>

  );
}

export default withStyles(styles)(Publication);
