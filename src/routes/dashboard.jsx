// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Description from "@material-ui/icons/Description";
import Email from "@material-ui/icons/Email";
import LiveTv from "@material-ui/icons/LiveTv";

import UserProfile from "views/UserProfile/UserProfile.jsx";
import Publications from "views/Publications/Publications.jsx";
import Talks from "views/Talks/Talks.jsx";

import Contact from "views/Contact/Contact.jsx";


const dashboardRoutes = [
  {
    path: "/about",
    sidebarName: "About Me",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/publications",
    sidebarName: "Publications",
    navbarName: "Publications",
    icon: Description,
    component: Publications
  },
  {
    path: "/talks",
    sidebarName: "Talks",
    navbarName: "Talks",
    icon: LiveTv,
    component: Talks
  },
  {
    path: "/contact",
    sidebarName: "Contact Me",
    navbarName: "Contact Me",
    icon: Email,
    component: Contact
  },
  { redirect: true, path: "/", to: "/about", navbarName: "Redirect" }
];

export default dashboardRoutes;
