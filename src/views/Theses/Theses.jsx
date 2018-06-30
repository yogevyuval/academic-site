import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";

import Publication from "./Thesis.jsx"
import pubData from './thesesData.js'

const styles = {};


function Publications(props) {
    const pubs = pubData.map((pub, index) =>

        <GridItem xs={11} sm={11} md={11}>
            <Publication index={pubData.length - index} key={index} pub={pub}/>
        </GridItem>
    );
    return (
        <Grid justify="center" container>
            {pubs}
        </Grid>
    );
}

export default withStyles(styles)(Publications);
