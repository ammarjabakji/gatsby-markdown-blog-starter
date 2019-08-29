import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import styles from "./PostTags.module.scss"

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className={styles.tagContainer}>

        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <span>{tag}</span>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
