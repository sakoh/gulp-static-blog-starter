const yaml = require('js-yaml'),
      fs = require('fs');

function jsonify(file) {
  return yaml.safeLoad(fs.readFileSync(`${__dirname}/${file}`, 'utf8'));
}

module.exports = {
  navigation: jsonify('navigation.yml')
}
