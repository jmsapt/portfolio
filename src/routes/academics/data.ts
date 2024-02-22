import transcript from './transcipt.json';

export interface Term {
    year: number,
    term: number
}

export interface Entry {
    course: string,
    name: string,
    grade: string,
    mark: number,
    uoc: number
    taken: Term,
}

export const data: Entry[] = transcript;

