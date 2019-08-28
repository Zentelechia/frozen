import {
  Meteor
} from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

var SensorsData = new Meteor.Collection('SensorsData')
Router.route('/api/v1/data/push', function () {
  var data = this.request && this.request.query;
  var res = this.response;
  console.log(req.query)
  if (data && data.id)
    Sensors.upsert({
      id: data.id
    }, {
      id: data.id
    })

  SensorsData.insert({
    ...req.query
  })
  res.end('hello from the server\n');
}, {
  where: 'server'
});