const validateTel = (value) => {
  return !/[^\d\(\)\-']/gi.test(value) && value !== "";
};
export default validateTel;
