const path = require('path');

const app_path = path.dirname(process.mainModule.filename);
const views = path.join(app_path, 'Views');

exports.views = views;