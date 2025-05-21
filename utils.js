function generateSchedule(subjects, dailyHours) {
  const schedule = {};
  const today = new Date();

  subjects.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  for (const subject of subjects) {
    let remainingHours = subject.hours;
    const deadline = new Date(subject.deadline);
    const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));

    for (let i = 0; i < daysLeft && remainingHours > 0; i++) {
      const dateKey = new Date(today);
      dateKey.setDate(dateKey.getDate() + i);
      const dateStr = dateKey.toISOString().split('T')[0];

      if (!schedule[dateStr]) schedule[dateStr] = [];

      const usedToday = schedule[dateStr].reduce((sum, task) => sum + task.hours, 0);
      const availableToday = dailyHours - usedToday;
      if (availableToday <= 0) continue;

      const hoursToAssign = Math.min(availableToday, remainingHours);
      schedule[dateStr].push({ subject: subject.name, hours: hoursToAssign });
      remainingHours -= hoursToAssign;
    }
  }

  return schedule;
}

module.exports = generateSchedule;
