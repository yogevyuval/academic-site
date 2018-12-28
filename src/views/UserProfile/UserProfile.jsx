import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import {Link} from "react-router-dom"
import avatar from "assets/img/faces/profile.jpeg";

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
                        <CardBody style={{paddingTop: 0}} profile>
                        <h4 style={styles.title}>Eylon Yogev</h4>
                            <h6 className={classes.cardCategory}>Technion</h6>
                            
							<p style={styles.description}>
                                Hi, my name is Eylon and I am a postdoc hosted by <a href="http://www.cs.technion.ac.il/~yuvali/" target="_blank" rel="noopener noreferrer">Prof. Yuval Ishai</a>.
                                We are working on some intriguing cryptographic primitives so stay tuned!
                            </p>
                            <p style={styles.description}>
                                Previously, I was a postdoc at the Weizmann Institute of Science hosted by <a href="http://www.weizmann.ac.il/math/parter/home" target="_blank" rel="noopener noreferrer">Dr. Merav Parter</a>.
                                By connecting our two fields, Merav and I studied new synergies between Cryptography and Distributed Computation. See my latest <a href="/publications">publications</a> with Merav if you are curious.
                            </p>
                            <p style={styles.description}>
                                I have completed my Ph.D. also at Weizmann, where I was extremely lucky
                                to be advised by <a href="http://www.wisdom.weizmann.ac.il/~/naor/" target="_blank" rel="noopener noreferrer">Prof. Moni Naor</a>. Before that, I completed my M.Sc at Weizmann in 2013 under the same
                                supervisor.
                            </p>
                            
                            <p style={styles.description}>
                                As you might have guessed already, I am generally interested in Cryptography and in particular in its various connections to other areas in
                                Theoretical Computer Science. Some of the most prominent examples include Complexity, Data Structures, Distributed
                                Algorithms and Search Problems. Send me an <a href="/contact">email</a> if you are interested in such
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
