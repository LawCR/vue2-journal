const getDayMonthYearText = (date) => {
  const day = date.getDate()
  const monthFormat = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date);
  const month = monthFormat[0].toUpperCase() + monthFormat.slice(1);
  const year = date.getFullYear();

  // Obtener el nombre del dia de la semana
  const dayFormat = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);
  const dayName = dayFormat[0].toUpperCase() + dayFormat.slice(1);

  // const hhmm = date.getHours() + ':' + date.getMinutes();

  return `${dayName} - ${day} ${month} de ${year}`;
}

export default getDayMonthYearText;