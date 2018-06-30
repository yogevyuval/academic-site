/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Redirect} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Sidebar from "components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "routes/dashboard.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/logo.png";
import Header from "./Header"


class App extends React.Component {
    state = {
        mobileOpen: false
    };

    constructor(props) {
        super(props);
        this.state = {
            pubData: [],
            authors: [],
            talks: [],
            theses: []
        };
        fetch("https://homepage-208315.firebaseio.com/publications.json")
            .then(data => data.json())
            .then(data => this.setState({pubData: data}));

        fetch("https://homepage-208315.firebaseio.com/authors.json")
            .then(data => data.json())
            .then(data => this.setState({authors: data}));
        fetch("https://homepage-208315.firebaseio.com/talks.json")
            .then(data => data.json())
            .then(data => this.setState({talks: data}));
        fetch("https://homepage-208315.firebaseio.com/theses.json")
            .then(data => data.json())
            .then(data => this.setState({theses: data}))
    }

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };


    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
            if (this.state.mobileOpen) {
                this.setState({mobileOpen: false});
            }
        }
    }

    render() {
        const switchRoutes = (
            <Switch>
                {dashboardRoutes.map((prop, key) => {
                    if (prop.redirect)
                        return <Redirect from={prop.path} to={prop.to} key={key}/>;
                    return <Route path={prop.path} render={() => {
                        const Comp = prop.component;
                        return <Comp pubData={this.state.pubData} authors={this.state.authors} talks={this.state.talks} theses={this.state.theses}/>
                    }
                    } key={key}/>;
                })}
            </Switch>
        );
        const {classes, ...rest} = this.props;
        return (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={dashboardRoutes}
                    logoText={"Eylon Yogev"}
                    logo={logo}
                    image={image}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color="blue"
                    {...rest}
                />
                <div className={classes.mainPanel} ref="mainPanel">
                    <Header
                        routes={dashboardRoutes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />
                    {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
                    <div className={classes.content}>
                        <div className={classes.container}>{switchRoutes}</div>
                    </div>

                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
