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
        this.id = isNaN(props.id)?NaN:props.id,
        this.name = props.name?props.name:"",
        this.description = props.description?props.description: "",
        this.deadline = props.deadline?props.deadline:""
        this.parent = isNaN(props.parent)?NaN:props.parent,
        this.isDone = props.isDone?props.isDone:false,
        this.children = props.children?props.children:[]
        this.childrenSimplified = props.childrenSimplified?props.childrenSimplified:[]
    }
}