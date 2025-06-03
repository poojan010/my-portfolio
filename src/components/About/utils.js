export const getYearsOfExperience = (startDateStr) => {
  const [day, month, year] = startDateStr.split("-");
  const startDate = new Date(`${year}-${month}-${day}`);
  const now = new Date();

  const diffInMs = now - startDate;
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

  if (diffInYears < 0.5) return 0;

  const whole = Math.floor(diffInYears);
  const decimal = diffInYears - whole;

  if (decimal < 0.5) return whole;
  else return whole + 0.5;
};
