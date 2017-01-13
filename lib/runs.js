'use strict';

const User = function User(name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function Run(date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

User.prototype.totalDistance = function () {
  let runs = this.runs;

  let max = runs.length;

  let result = 0;

  for (let i = 0; i < max; i++) {
    result += runs[i].distance;
    return result;

  }
};

User.prototype.longestRun = function () {
  let runs = this.run;

  let result = runs[0].distance;

  for (let i = 1; i < runs.length; i++) {
    if (runs[i].distance > result) {
      result = runs[i].distance;
    }
  }

  return result;

};

User.prototype.averageSpeed = function () {
  let runs = this.runs;

  let totalTime = 0;

  for (let i = 0; i < runs.length; i++) {
    totalTime += runs[i].timeTaken;
  }

  return this.totalDistance() / totalTime;
};

const mcFaceRuns = new User('Person McFace', 'wdi@personmcface.com');
mcFaceRuns.runs.push(new Run('2015-05-25 15:00', 1200, 600));
mcFaceRuns.runs.push(new Run('2015-05-25 15:00', 1400, 800));

module.exports = { mcFaceRuns,
};

// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');
