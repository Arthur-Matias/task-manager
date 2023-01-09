type Task = {
    id: number;
    name: string;
    description?: string;
    deadline?: string;
    parent?: number;
    isDone?: boolean;
    children?: TaskSimplified[];
}

type TaskSimplified = {
    id: number;
    name: string;
    description?: string;
    deadline?: string;
    parent?: number;
    isDone?: boolean;
    children?: number[];
}