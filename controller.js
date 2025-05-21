const generateSchedule = require('../utils/scheduler');

exports.renderInputForm = (req, res) => {
  res.render('input');
};

exports.generateSchedule = (req, res) => {
  const subjects = req.body.subjects.map(sub => ({
    name: sub.name,
    hours: parseInt(sub.hours),
    deadline: sub.deadline
  }));
  const dailyHours = parseInt(req.body.dailyHours);
  const schedule = generateSchedule(subjects, dailyHours);
  res.render('schedule', { schedule });
};
