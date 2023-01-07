type Task = {
    id: number | undefined;
    name: string;
    description: string | undefined;
    deadline: string | undefined;
    parent: number | undefined;
    children: number[] | Task[];
}