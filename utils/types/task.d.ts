import Task from "../models/Task"

export type taskProps = {
    id: number | NaN;
    name?: string;
    description?: string;
    deadline?: string;
    parent: number | NaN;
    isDone?: boolean;
    children?: Task[];
    childrenSimplified?: number[];
}