type Task = {
    id: number;
    name: string;
    description: string | undefined;
    parent: number | undefined;
    children: number[] | Task[];
}

// type TaskWithChildren = {
//     id: number;
//     name: string;
//     description: string | null;
//     parent: number | null;
//     children: Task[]
// }