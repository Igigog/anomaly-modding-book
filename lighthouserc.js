const fs = require('fs');
const urls = JSON.parse(fs.readFileSync('./urls.json', 'utf8'));

module.exports = {
  ci: {
    collect: {
      staticDistDir: './build',
      url: urls,
      numberOfRuns: 3
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': ['error', { minScore: 0.9 }]
      }
    }
  }
};