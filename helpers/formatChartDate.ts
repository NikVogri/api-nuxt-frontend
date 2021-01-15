const formatChartDate = (date: Date): string => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${monthIndex + 1}/${year}`;
};

export default formatChartDate;
