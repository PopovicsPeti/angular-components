export interface Course {
    id: string,
    title: string,
    description: string,
    creationDate: string,
    duration: number,
    authors: Array<string>,
    editable: boolean
}
