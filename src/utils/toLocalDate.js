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

export function toLocalDateCustomized(date) {
  const options = {
    month: "long",
    day: "numeric",
  };
  
  const currentDate = new Date();
  const givenDate = new Date(date);
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  
  if (givenDate.toDateString() === currentDate.toDateString()) {
    return "امروز";
  } else if (givenDate.toDateString() === yesterday.toDateString()) {
    return "دیروز";
  } else {
    return givenDate.toLocaleDateString("fa-IR", options);
  }
}

