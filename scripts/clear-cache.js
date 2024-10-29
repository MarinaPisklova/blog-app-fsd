const fs = require('fs/promises');
const path = require('path');

fs.rm(path.resolve(__dirname, '..', 'node_modules', '.cache'), {
  recursive: true,
  force: true,
});
