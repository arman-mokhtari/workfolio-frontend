const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithComma(n) {
  const numWithCommas = numberWithCommas(n); // 1000,2343
  const persianNumber = toPersianNumbers(numWithCommas);
  return persianNumber;
}

function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(n) {
  return n?.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

export function toPersianNumbersWithCommaAndUnits(n) {
  const units = ["", "هزار", "میلیون", "میلیارد", "تریلیون", "تریلیارد", "کوادریلیون"]; // اضافه کردن واحدهای بیشتر به دلخواه شما
  
  const numWithCommas = numberWithCommas(n);
  const persianNumber = toPersianNumbers(numWithCommas);

  // تابع جدید برای تبدیل اعداد به فارسی با واحد مناسب
  function convertToPersianWithUnits(number, unitIndex) {
    const unit = units[unitIndex];
    if (!number || number === "۰") return "";
    return `${number} ${unit} `;
  }

  let result = "";
  const parts = persianNumber.split(",");
  for (let i = 0; i < parts.length; i++) {
    const unitIndex = units.length - 1 - i;
    result += convertToPersianWithUnits(parts[i], unitIndex);
  }

  return result.trim();
}