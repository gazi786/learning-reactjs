const weekLookUp = {
  "week-one": 1,
  "week-two": 2,
  "week-three": 3,
  "week-four": 4,
  "week-five": 5,
  "week-six": 6,
  "week-seven": 7,
  "week-eight": 8,
  "week-nine": 9,
  "week-ten": 10,
  "week-eleven": 11,
  "week-twelve": 12,
  "week-thirteen": 13,
  "week-fourteen": 14,
  "week-fifteen": 15,
  "week-sixteen": 16,
};

export const getDateForRoute = (route) => {
  const startDate = new Date("January 16, 2023");
  const [weekStr, dayOfWeek] = route.split("/").slice(1);

  const week = weekLookUp[weekStr];

  const daysToAdd = (week - 1) * 7;

  switch (dayOfWeek) {
    case "monday":
      const mondayDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + daysToAdd
      );
      return getFormattedDate(mondayDate);
    case "tuesday":
      const tuesdayDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + daysToAdd + 1
      );
      return getFormattedDate(tuesdayDate);
    case "wednesday":
      const wednesdayDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + daysToAdd + 2
      );
      return getFormattedDate(wednesdayDate);
    case "thursday":
      const thursdayDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + daysToAdd + 3
      );
      return getFormattedDate(thursdayDate);
    case "friday":
      const fridayDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + daysToAdd + 4
      );
      return getFormattedDate(fridayDate);
    default:
      return "";
  }
};

const getFormattedDate = (date) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const ordinalIndicator = getOrdinalIndicator(day);
  const formattedDay = `${day}<sup>${ordinalIndicator}</sup>`;
  return { __html: `${month} ${formattedDay}, ${year}` };
};

const getOrdinalIndicator = (number) => {
  const suffixes = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
  const v = number % 100;
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
};
