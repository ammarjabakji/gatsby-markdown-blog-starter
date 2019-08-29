import React from "react";
import { Link } from "gatsby";
import styles from  "./PostsListing.module.scss"

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div className={styles.articleList}>
        {/* Your post list here. */
        postList.map(post => (
          <Link to={post.path} key={post.title}>
            <article className={styles.articleBox}>
              <div className={styles.right}>
                <h3>{post.title}</h3>
                <div className={styles.date}>{post.date}</div>
                <p>{post.excerpt}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
