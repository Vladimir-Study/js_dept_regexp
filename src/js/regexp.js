export class Validator {
  validateUserName(name) {
    const reOne = /^[a-zA-Z]+[a-zA-Z-_0-9]*[a-zA-Z]+$/;
    const reTwo = /\d{4,}/g;
    if (reOne.test(name)) {
      console.log(name.match(reTwo));
      if (name.match(reTwo) === null) {
        return true;
      }
      return false;
    }
    return false;
  }
}
