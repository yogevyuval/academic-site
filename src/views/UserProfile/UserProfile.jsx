import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import {Link} from "react-router-dom"
import avatar from "assets/img/faces/ilu.jpg";

const styles = {
    description: {
        fontSize: "18px",
        textAlign: "left"
    },
    title: {
        fontSize: "24px"
    },

};

function UserProfile(props) {
    const {classes} = props;
    return (
        <div>
            <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                    <Card profile>
                        <CardAvatar profile>
                            <img src={avatar} alt=".."/>
                        </CardAvatar>
                        <CardBody profile>
                            <h6 className={classes.cardCategory}>Weizmann Institute</h6>
                            <h4 style={styles.title}>Eylon Yogev</h4>
                            <p style={styles.description}>
                                I have completed my Ph.D. at Weizmann Institute of Science, where I was extremely lucky
                                to be advised by Prof. Moni Naor. I completed my M.Sc at Weizmann in 2013 under the same
                                supervisor.
                            </p>
                            <p style={styles.description}>
                                Currently, I'm a postdoc hosted by Dr. Merav Parter working on the synergy of
                                cryptography and distributed computation.
                            </p>
                            <p style={styles.description}>
                                I am interested in Cryptography in general and its various connections to other areas in
                                theoretical computer science such as complexity, data structures, distributed
                                algorithms, search problems and more. Send me an email if you are interested in such
                                connections too!
                            </p>


                            <Link to="/publications">
                                <Button color="primary" round>
                                    Publications
                                </Button>
                            </Link>


                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(UserProfile);
