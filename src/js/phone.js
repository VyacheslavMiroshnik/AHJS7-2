export default function phoneToString(string) {
  let equalPhoneNumber = '+';
  const findCountryCodeSingleDigit = /^[\s+(-]?\d[\s-(]/;
  equalPhoneNumber += string
    .replace(findCountryCodeSingleDigit, '7')
    .match(/\d/g)
    .join('');
  return equalPhoneNumber;
}
