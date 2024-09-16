export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);

  return formatter;
};
