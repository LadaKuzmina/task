export function _calculateAge(birthday_string: Date) {
    let birthday = new Date(birthday_string);
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}