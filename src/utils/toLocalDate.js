export function toLocalDateString(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("fa-IR", options);
}

export function toLocalDateStringMiddle(date) {
  const options = {
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("fa-IR", options);
}

export function toLocalDateStringDay(date) {
  const options = {
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("fa-IR", options);
}

export function toLocalDateStringMonth(date) {
  const options = {
    month: "long",
  };
  return new Date(date).toLocaleDateString("fa-IR", options);
}

export function currentPersianDate() {
  const options = {
    year: "numeric",
  };
  const currentDate = new Date();
  return new Date(currentDate).toLocaleDateString("fa-IR", options);
}

export function toLocalDateStringShort(date) {
  return new Date(date).toLocaleDateString("fa-IR");
}
