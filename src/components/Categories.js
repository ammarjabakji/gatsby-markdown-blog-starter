import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";


export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___categories) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <>
        {data.allMarkdownRemark.group.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/${(category.fieldValue).replace(/\s+/g, '-').toLowerCase()}`} key={category.fieldValue}>
              {category.fieldValue}
              <strong>({category.totalCount})</strong>
            </Link>
          </li>
        ))}
      </>
    )}
  />
);
