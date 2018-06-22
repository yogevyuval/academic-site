import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.jsx";

const styles = {
  bold: {
    display: 'inline-block',
    fontWeight: 500,
    marginTop: '4px',
    marginBottom: '4px'
  },
  text: {
    marginTop: '4px',
    marginBottom: '4px'
  }
};
function Contact(props) {
  const { classes } = props;
  return (
    <Grid justify="center" container>
      <GridItem xs={10} sm={10} md={10}>
        <Card>
          <CardBody>
            <p>
              Please contact me for any question or comment.
            </p>


            <p style={styles.bold}>Email:&nbsp;</p><span style={styles.text}>mail</span> <br/>
            <p style={styles.bold}>Office:&nbsp;</p><span style={styles.text}>office</span> <br/>
            <p style={styles.bold}>Mailing address:&nbsp;</p><span style={styles.text}>Some address</span> <br/>


          </CardBody>
        </Card>
      </GridItem>
    </Grid>

  );
}

export default withStyles(styles)(Contact);
