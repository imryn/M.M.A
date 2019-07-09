import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

    static getValidatorErrorMessage(validatorName: string) {
      const config = {
          'required': 'Required',
          'invalidImageLink': 'The link should include jpg/gif/png',
          'invalidDate': 'The year should be before / equal to current year',
          'invalidText': 'The summery does not include spaces'
      };

      return config[validatorName];
    }

    static DateValidator(control) {
      if (control.value >= 1950 && control.value <= 2019 && control.value.length === 4) {
        return null;

      } else {
          return { 'invalidDate': true };
      }
    }

    static ImgValidator(control) {
      if (control.value.match(/\.(jpg|gif|png)$/) != null) {
        return null;

      } else {
          return { 'invalidImageLink': true };
      }
    }

    static TextValidator(control) {
      if (control.value.length <= 300 && control.value.match(/\s/) != null) {
        return null;

      } else {
          return { 'invalidText': true };
      }
    }
}
