var fs = require('fs');
var Flickr = require('flickr-sdk');

var flickrAuth = Flickr.OAuth.createPlugin(
  process.env.FLICKR_CONSUMER_KEY,
  process.env.FLICKR_CONSUMER_SECRET,
  process.env.FLICKR_OAUTH_TOKEN,
  process.env.FLICKR_OAUTH_TOKEN_SECRET
);

var flickrRest = new Flickr(process.env.FLICKR_CONSUMER_KEY);
var tempFile = __dirname + '/../temp.jpg';

function FlickrService(data) {

  const writeImagePromise = new Promise(function(resolve, reject) {
    fs.writeFile(tempFile, data.image, 'base64', function(err) {
      if(err) reject(err);
      else resolve('');
    });
  });

  const logError = function(err) {
    console.log(err);
  }

  this.uploadImage = function() {
    return writeImagePromise.then((result) => {
      return new Flickr.Upload(flickrAuth, tempFile, {
        title: data._id
      });
    }, logError)
      .then((result) => {
      return result.body.photoid._content;
    }, logError)
      .then((result) => {
      return flickrRest.photos.getSizes({
        photo_id: result
      })
    }, logError)
      .then((result) => {
      result.body.sizes.size.forEach(function(img) {
        if(img.label.includes('riginal')) {
          data.flickr_url = img.source;
          data.datetime = new Date();
          delete data.image;
          delete data.__v;
          delete data._id;
        }
      });
      return data;
    }, logError)
  };
}

module.exports = FlickrService;