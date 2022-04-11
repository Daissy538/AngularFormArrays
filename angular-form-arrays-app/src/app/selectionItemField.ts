export class SelectionItemField{
    public name: string;
    public children: SelectionItemField[];
    public hasTextInputField: boolean;

    public constructor(name: string, children: SelectionItemField[], hasTextInputField: boolean){
        this.name = name;
        this.children = children;
        this.hasTextInputField = hasTextInputField;
    }

}