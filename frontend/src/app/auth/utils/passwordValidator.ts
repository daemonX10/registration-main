import { FormGroup } from '@angular/forms';

export const passwordMatchValidator = (form: FormGroup) => {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;
  console.log(password);
  console.log(confirmPassword);
  return password === confirmPassword ? null : { passwordMistMatch: true };
};
