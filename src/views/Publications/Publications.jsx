import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";

import Publication from "./Publication.jsx"
const styles = {};


class Publications extends React.Component {

    render() {
        console.log(this.props.pubData);
        const pubs = this.props.pubData.map((pub, index) =>

            <GridItem xs={11} sm={11} md={11}>
                <Publication authors={this.props.authors} index={this.props.pubData.length - index} key={index} pub={pub}/>
            </GridItem>
        );
        return (
            <Grid justify="center" container>
                {pubs}
            </Grid>
        );

    }
}

export default withStyles(styles)(Publications);
