import {
  Meteor
} from 'meteor/meteor';

var multipart = require('parse-multipart');

Meteor.startup(() => {
  // code to run on server at startup
});

var SensorsData = new Meteor.Collection('SensorsData')
Router.route('/api/v1/data/push', function () {
  var data = this.request && this.request.query;
  var res = this.response;
  console.log(data)
  if (data && data.id)
    Sensors.upsert({
      id: data.id
    }, {
      id: data.id
    })

  SensorsData.insert({
    ...data
  })
  res.end('hello from the server\n');
}, {
  where: 'server'
});

Router.route('/api/v1/file/upload', function () {
  var data = this.request;
  var res = this.response;
  console.log(this.request.file)
  console.log(this.request.fils)
  res.end('hello from the server\n');
}, {
  where: 'server'
});