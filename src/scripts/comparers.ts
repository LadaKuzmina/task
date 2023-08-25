import {Student} from "../type";

export function comparerAlphabetic(student1: Student, student2: Student) {
    return comparer(student1.name, student2.name);
}

function comparerAlphabeticDesc(student1: Student, student2: Student) {
    return comparer(student2.name, student1.name);
}

function comparerByAgeDesc(student1: Student, student2: Student) {
    return comparer(student1.birthday, student2.birthday);
}

function comparerByAge(student1: Student, student2: Student) {
    return comparer(student2.birthday, student1.birthday);
}

function comparerByRatingDesc(student1: Student, student2: Student) {
    return comparer(student1.rating, student2.rating);
}

function comparerByRating(student1: Student, student2: Student) {
    return comparer(student2.rating, student1.rating);
}

function comparerByColor(student1: Student, student2: Student) {
    return comparer(student1.color, student2.color);
}

function comparer(field1: string | Date | number, field2: string | Date | number) {
    if (field1 < field2) return -1;
    else if (field1 > field2) return 1;
    return 0;
}

export function getComparer(sortingParameter: string) {
    if (sortingParameter === "Имя А-Я") return comparerAlphabetic;
    if (sortingParameter === "Имя Я-А") return comparerAlphabeticDesc;
    if (sortingParameter === "Сначала моложе") return comparerByAge;
    if (sortingParameter === "Сначала старше") return comparerByAgeDesc;
    if (sortingParameter === "Высокий рейтинг") return comparerByRating;
    if (sortingParameter === "Низкий рейтинг") return comparerByRatingDesc;
    if (sortingParameter === "Любимый цвет") return comparerByColor;
}