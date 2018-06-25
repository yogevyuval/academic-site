import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Publication from "./Publication.jsx"
import pubData from './pubData.js'

const styles = {};


function Publications(props) {
    const {classes} = props;

    const pubs = pubData.map((pub, index) =>

        <GridItem xs={10} sm={10} md={10}>
            <Publication index={index+1} key={index} pub={pub}/>
        </GridItem>
    );
    return (
        <Grid justify="center" container>
            {pubs}
        </Grid>
    );
}

export default withStyles(styles)(Publications);
