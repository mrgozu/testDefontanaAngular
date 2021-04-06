export class DataOriginal{
    ID:string;
    Name:string;
    Parent:number;
};
export class DataOrdenada {
    ID:string;
    Name:string;
    Children?:DataOrdenada[];
    constructor(ID:string, Name:string, Children:DataOrdenada[] = []){
        this.ID = ID;
        this.Name = Name;
        this.Children = Children;
    }
}