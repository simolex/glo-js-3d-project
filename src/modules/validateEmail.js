const validateEmail = (value) => {
  return !/[^\w\-\@\.\!\~\*\']/gi.test(value) && value !== "";
};
export default validateEmail;
