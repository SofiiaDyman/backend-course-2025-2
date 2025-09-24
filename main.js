const DATE = "10.09.2024";
const VAL_CODE = "EUR";

const url = new URL("https://bank.gov.ua/NBU_ovdp");

url.searchParams.append("json", "");
url.searchParams.append("date", DATE);
url.searchParams.append("val_code", VAL_CODE);

console.log(url.toString());
