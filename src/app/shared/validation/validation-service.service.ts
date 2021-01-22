import { Injectable } from '@angular/core';
import { ValidationError } from './validation.enum';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  static config = {
    [ValidationError.required]: 'Required',
    [ValidationError.invalidImageLink]: 'The link should include jpg/gif/png',
    [ValidationError.invalidDate]: 'The year should be before / equal to current year',
    [ValidationError.invalidText]: 'Too much characters in the summary'
};

  static getValidatorErrorMessage(validatorName: string) {
      
    return ValidationService.config[validatorName];
  }

  static DateValidator(control) {
    const date = new Date;

    if (control.value >= 1950 && control.value <=  date.getFullYear() && control.value.length === 4) {
      return null;

    } else {
        return { [ValidationError.invalidDate]: true };
    }
  }

  static ImgValidator(control) {
    if (control.value.match(/\.(jpg|gif|png)$/) != null) {
      return null;

    } else {
        return { [ValidationError.invalidImageLink]: true };
    }
  }

  static TextValidator(control) {
    if (control.value.length <= 300) {
      return null;

    } else {
        return {[ValidationError.invalidText]: true };
    }
  }
}
