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
                            
                            
                            <p style={styles.description}>
                                I am a faculty member in the department of Computer Science at Bar-Ilan University, and a member of the Bar-Ilan Center for Research in Applied Cryptography and Cyber Security.
                            </p>
							
                            <p style={styles.description}>
                                I have completed my Ph.D. at Weizmann, where I was fortunate to be advised by <a href="http://www.wisdom.weizmann.ac.il/~/naor/" target="_blank" rel="noopener noreferrer">Prof. Moni Naor</a>.
                            </p>
                            
                            <p style={styles.description}>
                                My general area of interest is cryptography and, in particular, in its various connections to other areas in
                                Theoretical Computer Science. Some prominent examples include complexity, data structures, and distributed
                                algorithms.
                            </p>

                            <p style={styles.description}>
                                <b>Program Committees:</b>
                                <ul>
                                    <li><a href="http://itcs-conf.org/" target="_blank" rel="noopener noreferrer">ITCS 2022</a></li>
                                    <li><a href="https://eurocrypt.iacr.org/2020/" target="_blank" rel="noopener noreferrer">Eurocrypt 2020</a></li>
                                    <li><a href="https://tcc.iacr.org/2020/" target="_blank" rel="noopener noreferrer">TCC 2020</a></li>
                                </ul>
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
