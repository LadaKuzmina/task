export function getAgeWord(age: number) {
    if ((age / 10) % 10 !== 1 && age % 10 === 1) return age + " год";
    else if (Math.floor((age / 10) % 10) !== 1 && (age % 10 === 2 || age % 10 === 3 || age % 10 === 4)) return age + " года";
    return age + " лет";
}