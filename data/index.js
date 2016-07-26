const yaml = require('js-yaml'),
      fs = require('fs'),
      gm = require('gray-matter');

function jsonify(file) {
  return yaml.safeLoad(fs.readFileSync(`${__dirname}/${file}`, 'utf8'));
}

module.exports = {
  title: "Gulp Static Blog Generator",
  navigation: jsonify('navigation.yml'),
  posts: fs.readdirSync('./posts').map(post => gm.read(`./posts/${post}`))
}
