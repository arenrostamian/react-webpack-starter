// import and set as initial state on redux
// will set up in firebase and call on component will mount or something
const packages = [
  {
    name: 'axios',
    description: 'Promise based HTTP client for the browser and node.js',
    npmUrl: 'https://www.npmjs.com/package/axios',
    githubUrl: 'https://github.com/mzabriskie/axios',
    stats: {
      stars: 503,
      forks: 1345,
      downloads: {
        day: 0,
        week: 298154,
        month: 1512405
      },
      openIssues: 140,
      openPR: 32
    },
    lastUpdated: {
      days: 26,
      months: 0,
      years: 0
    },
    install: {
      npm: 'npm install axios',
      bower: 'bower install axios',
      cdn: '<script src="https://unpkg.com/axios/dist/axios.min.js"></script>'
    },
    test: 'https://npm.runkit.com/axios'
  }
]

export default packages
