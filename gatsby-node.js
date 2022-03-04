const plant_metadata = require('./src/data/plant_metadata.json')


exports.createPages = ({ actions }) => {
    const { createPage } = actions
    plant_metadata.forEach(chapter => {
      createPage({
        path: `/plants-by-chapter/${chapter.chapterNumber}`,
        component: require.resolve(`./src/templates/chapter-template.js`),
        context: { chapter },
      })
    })
  }