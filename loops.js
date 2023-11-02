// scripts.js

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

/*  Added in i = 0 and i++ 
    Renamed the variable containing the array to array for readability
    Added in 'i' so that it pushes whatever 'i' is at the time to create an array of 'i' length
 */
const createArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }

  return array;
};

/**
 * Creates the calendar data with nested arrays.
 */
const createData = () => {
  // Added in = to complete the arrow function
  const current = new Date(); // Used new Date() to create date object for current date
  current.setDate(1); // Sets the current date to the first day of the month

  const startDay = current.getDay(); // Used getDay() to get the current date
  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(5);
  const days = createArray(7); // Create an array of the days in current month

  const calendarData = []; // Changed from result to calendarData

  /**
   * Loops through the weeks array and pushes an object into the calenderData array.
   * weekIndex + 1 for human readability. (Instead of week 0 it is week 1 (0+1))
   */
  for (const weekIndex of weeks) {
    calendarData.push({
      week: weekIndex + 1,
      days: [],
    });

    /**
     * Nested loop that loops through the days array every time it loops through a week above
     * Creates day variable that calculates the day of month for current day of the week (number)
     * Creates isValid variable that ensures the number that day returns is a valid number
     * Pushes an object into the days property of calendarData
     */
    for (const dayIndex of days) {
      const day = dayIndex - startDay + weekIndex * 7 + 1; // Changed the day equation to + (weekIndex * 7) and + 1 to calculate the day of the month for the current day of the week
      const isValid = day > 0 && day <= daysInMonth;

      calendarData[weekIndex].days.push({
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : "",
      });
    }
  }

  return calendarData;
};

/**
 * Basic function that creates an HTML table cell
 */
const addCell = (existing, classString, value) => {
  // Interpolated existing into the template literal. This is how we concatenate the new cell to existing content. Changed variable name to tableCell. Are we supposed to leave the html comment there?
  const tableCell = /* html */ ` 
        ${existing} 

        <td class="${classString}">
                &nbsp;${value}&nbsp;
        </td>
    `;

  return tableCell;
};

/**
 * This creates the HTML structure for us.
 * It is doing it one by one through the for...of loops.
 */
const createHtml = (calendarData) => {
  let builtHtml = ""; // Changed variable name from result to builtHTML. Used to build the HTML for the entire calendar.

  // Included days in the destructuring and added in the parameter (calendarData) in the for...of loop
  for (const { week, days } of calendarData) {
    let inner = "";
    inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`); // getting class from the CSS

    // Added for in front of the for...of loop
    for (const { dayOfWeek, value } of days) {
      const isToday = new Date().getDate() === value;
      const isWeekend = dayOfWeek === 1 || dayOfWeek === 7; // Added 1 and 7 and used logical OR operator
      const isAlternate = week % 2 === 0;

      let classString = "table__cell";

      // Passed in isToday, isWeekend and isAlternate and interpolated classString
      if (isToday) classString = `${classString} table__cell_today`;
      if (isWeekend) classString = `${classString} table__cell_weekend`;
      if (isAlternate) classString = `${classString} table__cell_alternate`;

      inner = addCell(inner, classString, value);
    }

    builtHtml = `
            ${builtHtml}
            <tr>${inner}</tr>
        `;
  }

  return builtHtml;
};

// // Only edit above

const current = new Date();
document.querySelector("[data-title]").innerText = `${
  MONTHS[current.getMonth()]
} ${current.getFullYear()}`;

const calendarData = createData();
document.querySelector("[data-content]").innerHTML = createHtml(calendarData);
