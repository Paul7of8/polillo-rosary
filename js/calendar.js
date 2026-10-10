// Chooses the day's mysteries from a local date.

(function () {
  const DAY = 24 * 60 * 60 * 1000;

  // Whole-day number for a local date, so comparisons ignore time and DST.
  function dayNumber(date) {
    return Math.round(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / DAY);
  }

  // Easter Sunday (Gregorian), by the anonymous "Meeus/Jones/Butcher" algorithm.
  function easter(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
  }

  // Lent runs from Ash Wednesday (46 days before Easter) up to Easter, so its
  // Sundays are the six before Easter, Palm Sunday included.
  function isInLent(date) {
    const e = dayNumber(easter(date.getFullYear()));
    const n = dayNumber(date);
    return n >= e - 46 && n < e;
  }

  // Advent starts on the Sunday falling on or after November 27 and ends on December 24.
  function isInAdvent(date) {
    const year = date.getFullYear();
    const nov27 = new Date(year, 10, 27);
    const start = dayNumber(nov27) + ((7 - nov27.getDay()) % 7);
    const n = dayNumber(date);
    return n >= start && n <= dayNumber(new Date(year, 11, 24));
  }

  const WEEKDAYS = ["glorious", "joyful", "sorrowful", "glorious", "luminous", "sorrowful", "joyful"];

  function mysteriesFor(date) {
    if (date.getDay() === 0) {
      if (isInAdvent(date)) return "joyful";
      if (isInLent(date)) return "sorrowful";
    }
    return WEEKDAYS[date.getDay()];
  }

  window.RosaryCalendar = { easter, isInLent, isInAdvent, mysteriesFor };
})();
