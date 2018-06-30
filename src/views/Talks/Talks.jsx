import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";

import Talk from "./Talk.jsx"

const styles = {};


class Talks extends React.Component {

    render() {
        const pubs = this.props.talks.map((talk, index) =>

            <GridItem xs={11} sm={11} md={11}>
                <Talk index={this.props.talks.length - index} key={index} talk={talk}/>
            </GridItem>
        );
        return (
            <Grid justify="center" container>
                {pubs}
            </Grid>
        );
    }
}

export default withStyles(styles)(Talks);
