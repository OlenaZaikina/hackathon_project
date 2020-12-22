export default function validateSignIn(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Must have at least 6 characters';
  } else if (values.password.length < 6) {
    errors.password = 'Must have at least 6 characters';
  }
  return errors;
}
