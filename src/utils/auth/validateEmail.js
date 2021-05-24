const validateEmail = (email) => {
  const regexp = new RegExp('([a-zA-Z0-9]([^ @&%$\\\/()=?¿!.,:;]?|\d?)+[a-zA-Z0-9][\.]){1,2}');
  return regexp.test(email);
}

export default validateEmail;