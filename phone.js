export default function isPhoneNumber(number) {
  const germanNumber = /\+?[0-9 -.]{7,16}/;
  return germanNumber.test(number);
}
