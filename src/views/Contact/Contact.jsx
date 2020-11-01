import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.jsx";

import Icon from "assets/img/contactme.png";
import CardAvatar from "components/Card/CardAvatar.jsx";
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
  return (
    <Grid justify="center" container>
      <GridItem xs={11} sm={11} md={11}>
        <Card>
        <CardAvatar profile>
                <img src={Icon} alt=".."/>
            </CardAvatar>
          <CardBody>
            <p>
              Please feel free to contact me for collaboration or any question or comment.
            </p>

            <p style={styles.bold}>Email:&nbsp;</p><span style={styles.text}>eylony at gmail dot com</span> <br/>
            <p style={styles.bold}>Office:&nbsp;</p><span style={styles.text}>Computer Science Department, Tel-Aviv University, Checkpoint Building, Room 370. </span> <br/>


          </CardBody>
        </Card>
      </GridItem>
    </Grid>

  );
}

export default withStyles(styles)(Contact);
