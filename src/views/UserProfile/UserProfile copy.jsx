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
                            <h6 className={classes.cardCategory}>Bar-Ilan University</h6>
                            
                            <p style={styles.description}>
                                I am a faculty member at the department of Computer Science, and a member of the Bar-Ilan Center for Research in Applied Cryptography and Cyber Security.
                            </p>
							<p style={styles.description}>
                                <b>2019:</b> A research fellow at the <a href="https://simons.berkeley.edu/" target="_blank" rel="noopener noreferrer">Simons Institute</a> for the Theory of Computing.
                            </p>
                            <p style={styles.description}>
                                <b>2018-2019:</b> A postdoc at the Technion (hosted by <a href="http://www.cs.technion.ac.il/~yuvali/" target="_blank" rel="noopener noreferrer">Prof. Yuval Ishai</a>)  and the Weizmann Institute of Science (hosted by <a href="http://www.weizmann.ac.il/math/parter/home" target="_blank" rel="noopener noreferrer">Dr. Merav Parter</a>).
                            </p>
                            <p style={styles.description}>
                                <b>2011-2018:</b> I have completed my Ph.D. and M.Sc at Weizmann, where I was fortunate
                                to be advised by <a href="http://www.wisdom.weizmann.ac.il/~/naor/" target="_blank" rel="noopener noreferrer">Prof. Moni Naor</a>.
                            </p>
                            
                            <p style={styles.description}>
                                As you might have guessed already, I am generally interested in Cryptography and in particular, in its various connections to other areas in
                                Theoretical Computer Science. Some of the most prominent examples include Complexity, Data Structures, Distributed
                                Algorithms, and Search Problems. Send me an <a href="/contact">email</a> if you are interested in such
                                connections too!
                            </p>

                            <p style={styles.description}>
                                <b>Program Committees:</b>
                                <ul>
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
