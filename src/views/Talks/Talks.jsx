import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Talk from "./Talk.jsx"
import talksData from './talksData.js'

const styles = {};


function Talks(props) {
    const {classes} = props;

    const pubs = talksData.map((talk, index) =>

        <GridItem xs={10} sm={10} md={10}>
            <Talk index={talksData.length - index} key={index} talk={talk}/>
        </GridItem>
    );
    return (
        <Grid justify="center" container>
            {pubs}
        </Grid>
    );
}

export default withStyles(styles)(Talks);
