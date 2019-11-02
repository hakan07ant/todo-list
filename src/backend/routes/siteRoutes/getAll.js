const defaults = require.main.require('./defaults')

const siteRoutesIndex = async (req, res) => {
  try {
    const routes = {
      '/': {
        title: defaults.site.name
      },
      '/pages': {
        title: `Pages - ${defaults.site.name}`
      },
      '/not-found': {
        title: `Not Found - ${defaults.site.name}`
      }
    }
    const url = req.originalUrl
    const activePageTitle = Object.prototype.hasOwnProperty.call(routes, url)
      ? routes[url].title
      : defaults.site.name

    res.render('index', {
      defaults: {
        routes,
        activePageTitle,
        siteName: defaults.site.name,
        language: defaults.site.language
      }
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = siteRoutesIndex
