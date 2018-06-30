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
const styles = {};


class Publications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pubData: []
        };
        fetch("https://homepage-208315.firebaseio.com/publications.json?print=pretty")
            .then(data => data.json())
            .then(data => this.setState({pubData: data}))
    }
    render = () => {
        const pubs = this.state.pubData.map((pub, index) =>

            <GridItem xs={10} sm={10} md={10}>
                <Publication index={this.state.pubData.length - index} key={index} pub={pub}/>
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
