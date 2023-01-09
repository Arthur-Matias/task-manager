import Task from "../models/Task"

export type taskProps = {
    id: number;
    name: string;
    description?: string;
    deadline?: string;
    parent?: number;
    isDone?: boolean;
    children?: Task[];
    childrenSimplified?: number[];
}