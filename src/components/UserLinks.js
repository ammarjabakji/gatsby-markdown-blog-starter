import React, { Component } from "react";
import styles from  './UserLinks.module.scss'

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <button key={link.label} href={link.url}>
        {labeled ? link.label : ""}
      </button>
    ));
  }
  
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className={styles.userLinks}>{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
