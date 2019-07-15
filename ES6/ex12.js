// Parse the day, month and year from the date (’2025-09-26’)
function extractDateMonthYear(input) {
    const [year, month, date] = input.split('-');
    console.log(year, month, date);
}

extractDateMonthYear('2025-09-26');