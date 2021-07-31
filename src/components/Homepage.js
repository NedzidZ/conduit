import React from "react";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (<div>
    <div className={classes.conduitdiv}>
      <h1 className={classes.conduit}>conduit</h1>
      <h2 className={classes.knowledge}>A place to share your knowledge</h2>
    </div>
    <div>
      <h2>Global feed</h2>
      <h2>Popular Tags</h2>
    </div>
  </div>);
}
export default Homepage;
