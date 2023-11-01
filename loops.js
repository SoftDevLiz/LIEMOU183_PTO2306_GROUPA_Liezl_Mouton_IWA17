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

// Added in i = 0 and i++ and renamed the variable containing the array to array so that we do not get confused with the other result variable later on
const createArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(i); // Added in 'i' so that it pushes whatever 'i' is at the time
  }

  return array;
};

const createData = () => {
  // Added in = to complete the arrow function
  const current = new Date(); // Used new Date() to create date object for current date
  // current.set(1); Why?

  const startDay = current.getDate(); // Used getDate() to get the current date
  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(5);
  const days = createArray(daysInMonth); // Create an array of the days in current month

  const result = [];

  for (const weekIndex of weeks) {
    result.push({
      week: weekIndex + 1,
      days: [],
    });

    // Changed the day equation to + (weekIndex * 7) and + 1 to calculate the day of the month for the current day of the week
    for (const dayIndex of days) {
      const day = dayIndex - startDay + weekIndex * 7 + 1;
      const isValid = day > 0 && day <= daysInMonth;

      result[weekIndex].days.push({
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : "",
      });
    }
  }

  return result;
};

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${}

        <td class="${classString}">
                &nbsp;${value}&nbsp;
        </td>
    `

    return result
}

const createHtml = (data) => {
    let result = ''

    for (const { week,  } of ) {
        let inner = ""
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)

         (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek ===  | dayOfWeek ===
            const isAlternate = week % 2 === 0

						let classString = 'table__cell'

            if () classString = `${} table__cell_`
            if () classString = `${} table__cell_`
            if () classString = `${} table__cell_`
            inner = addCell()
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }

    return result
}

// // Only edit above

// const current = new Date()
// document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

// const data = createData()
// document.querySelector('[data-content]').innerHTML = createHtml(data)
