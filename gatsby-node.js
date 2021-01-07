const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/produkta-apraksts.js`)

  return graphql(`
    query generateProductPages {
        allDirectusProdukti {
            edges {
              node {
                id
              }
            }
        }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allDirectusProdukti.edges.forEach((edge, id) => {
      const realId = edge.node.id.match(/\d+/g).map(Number)-1
      createPage({
        path: "/produkts/"+realId,
        component: productTemplate,
        context: {
          pageid: edge.node.id
        },
      })
    })
  })
}