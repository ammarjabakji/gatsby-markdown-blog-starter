import React from 'react'
import { useStaticQuery, graphql , Link } from 'gatsby'
import _ from "lodash";

const Categories = () => {

  const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___categories) {
                  fieldValue
                  totalCount
                }
        }
      }
    `)

    return (
      <>
        {data.allMarkdownRemark.group.map(category => (
          <li key={category.fieldValue}>
            <Link
              to={`/${_.kebabCase(category.fieldValue)}`}
              key={category.fieldValue}
            >
              {category.fieldValue}
              <strong>({category.totalCount})</strong>
            </Link>
          </li>
        ))}
      </>
    )

}

export default Categories



