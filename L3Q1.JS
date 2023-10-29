function formatTwoDigitNumber(number) {
    return number < 10 ? "0" + number : number.toString();
  }
  
  function getHumanReadableTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = formatTwoDigitNumber(now.getMonth() + 1); // Months are zero-based
    const day = formatTwoDigitNumber(now.getDate());
    const hours = formatTwoDigitNumber(now.getHours());
    const minutes = formatTwoDigitNumber(now.getMinutes());
  
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
  
  const formattedTime = getHumanReadableTime();
  console.log(formattedTime);
  