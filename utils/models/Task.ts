import { taskProps } from "../types/task";

export default class Task implements taskProps{
    id: number;
    name: string;
    description: string;
    deadline: string;
    parent: number;
    isDone: boolean;
    children: Task[];
    childrenSimplified: number[];
    constructor(props: taskProps){
        this.id = props.id,
        this.name = props.name,
        this.description = props.description?props.description: "",
        this.deadline = props.deadline?props.deadline:""
        this.parent = props.parent?props.parent:NaN,
        this.isDone = props.isDone?props.isDone:false,
        this.children = props.children?props.children:[]
        this.childrenSimplified = props.childrenSimplified?props.childrenSimplified:[]
    }
}