export default function validateSignUp(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

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
  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}