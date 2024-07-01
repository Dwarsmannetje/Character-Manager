import { Variable } from "./variable";

export class GivenVariable extends Variable {
    override getValue(): number {
      return this.value
    }
  
    override returnType() {
      return GivenVariable
    }
    tekst = ""
    modifier = 0
    //formula: Formula = new Formula(1, Operation.ADD, 3)
    constructor(name: String) {
      super(name);
    }
  
    setValue(value: number) {
      this.value = value
      this.tekst = value.toString()
      this.modifier = Math.floor((value - 10) / 2)
    }
    //userinput
  
  }