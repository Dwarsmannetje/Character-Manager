import { Formula } from "./formula";
import { Variable } from "./variable";

export class CalculatedVariable extends Variable {
    override getValue(): number {
      this.value = this.formula.calculate()
      return this.formula.calculate()
    }
  
    override returnType() {
      return CalculatedVariable
    }
    formula: Formula
    constructor(name: String, formula: Formula) {
      super(name);
      this.formula = formula
      this.value = formula.calculate()
    }
  }