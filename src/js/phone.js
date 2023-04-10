export default function phoneToString(string) {
  let equalPhoneNumber = '+';
  equalPhoneNumber += string
    .replace(/^[\s+(-]?\d[\s-(]/, '7')
    .match(/\d/g)
    .join('');
  return equalPhoneNumber;
}
