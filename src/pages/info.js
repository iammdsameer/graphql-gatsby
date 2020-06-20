import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Info({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <table>
          <thead>
            <tr>
              <th>Base</th>
              <th>Size</th>
              <th>Path</th>
              <th>Modified</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.base}</td>
                <td>{node.prettySize}</td>
                <td>{node.relativePath}</td>
                <td>{node.modifiedTime}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          base
          prettySize
          relativePath
          modifiedTime
          birthTime(fromNow: true)
        }
      }
    }
  }
`
