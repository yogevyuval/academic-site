import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.jsx";
import screenshot from "assets/img/extension-screenshot.png";
import ExtensionIcon from "assets/img/extension-icon.png";
import CardAvatar from "components/Card/CardAvatar.jsx";


const styles = {
  bold: {
    display: 'inline-block',
    fontWeight: 500,
    marginTop: '4px',
    marginBottom: '4px'
  },
  text: {
    marginTop: '4px',
    marginBottom: '4px'
  }
};

function Extension(props) {
  return (
    <Grid justify="center" container>
      <GridItem xs={11} sm={11} md={11}>
        <Card>
        <CardAvatar profile>
          <img src={ExtensionIcon} alt=".."/>
        </CardAvatar>     
          <CardBody>
          <h4 style={{fontWeight: 'bold',textAlign: "center"}}>Where's That Paper? - A Chrome Extension</h4>
            <p>
            Hi fellow researchers, <br/>
I have developed a little tool with the ambitious goal of boosting research productivity.
The tool is a Chrome extension named <a style={styles.bold} href={"https://chrome.google.com/webstore/detail/wheres-that-paper/dkjnkdmoghkbkfkafefhbcnmofdbfdio"}>“Where’s that paper?”</a>. Before I tell you more about what it does, let me touch upon the largest obstacle of any new tool, the learning curve. Rest assured that “Where’s that paper?” requires  zero training – just install it and continue working as usual – it will guide you without further effort on your end.
</p>
<p>
After building much suspense, I will elaborate. If you’re like me, you find yourself frequently searching the web for papers that you have browsed / opened in the past on your computer – basically paper browsing history. Whether it is in the process of writing a paper or searching for existing ideas, you may search for authors of titles of papers that you recall know to have once glimpsed at. At some point, the paper has either been downloaded or added  to the favorites bar. In any case, this process is manual and takes up much time (often including frustration). As such, I thought we could all use some code to automate it.
</p>
<p>
<div style={styles.bold}>Functionality.</div>
<br/>
The extension is very simple: it identifies when you are reading a scientific paper (according to the domain) and then automatically adds this paper, with the proper author list, year etc., to your favorites bar under a designated folder. Then, when you type a search in the Chrome’s search bar for an author or a title, the relevant results from the favorites pop up. One might also explicitly browse in the favorites to see all papers read.
</p>
<p>
See an example of the results shown when searching for “short” in Chrome’s address bar. The first three links are from the favorite and the rest are general Google suggestions from the web.
</p>
<img src={screenshot} center></img>
<p>


The extension automatically works on a list of specified domains that include:

eprint.iacr.org, arxiv.org, eccc.weizmann.ac.il, epubs.siam.org, research.microsoft.com, citeseerx.ist.psu.edu, ac.elscdn.com, www.sciencedirect.com, download.springer.com, link.springer.com, delivery.acm.org, proceedings.mlr.press and journals.aps.org.
</p>
<p>
It is not too difficult to customize the list and additional domains. Reach out to me and I’ll add them upon your request!
</p>
<p>
A bonus feature: Click the extension’s icon and you can download a bib file containing (a nice formatting of) the DBLP bibtex records of all papers added to the favorites.
</p>
<p>
Download “Where’s that paper?” from the Chrome Web Store: <a href={"https://chrome.google.com/webstore/detail/wheres-that-paper/dkjnkdmoghkbkfkafefhbcnmofdbfdio"}>https://chrome.google.com/webstore/detail/wheres-that-paper/dkjnkdmoghkbkfkafefhbcnmofdbfdio</a>
</p>
<p>
<div style={styles.bold}>Security.</div>
<br/>
Most who work in our domain of expertise would be quite concerned with installing extensions and with good reason. The extension I wrote does not leak any information, not to me or to another third party. I have no ulterior motive in developing the extension, originally helping myself, I now see the benefit of sharing it with our community.  I do not know how to reassure you that this is indeed the case other than giving you my word and publishing the source code online. It is available here: <a href={"https://github.com/eylonyogev/Where-s-That-Paper-"}>https://github.com/eylonyogev/Where-s-That-Paper-</a>
</p><p>
I’d be glad to hear any feedback.

</p>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>

  );
}

export default withStyles(styles)(Extension);
