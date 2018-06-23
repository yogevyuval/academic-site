import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Save from '@material-ui/icons/PictureAsPdf';
import Button from '@material-ui/core/Button';

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
  pub: {
    marginTop: '8px',
    marginBottom: '8px'
  }
};

function Publication(props) {
  const { classes } = props;
  return (
    <Card style={styles.pub}>
      <CardBody>
	  <a href={props.pub.link} target="_blank">
        <p style={styles.title}>{props.pub.title}</p>
		</a>
        <p style={styles.authors}>{props.pub.authors.sort().join(", ") + " and Eylon Yogev"}</p>
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
