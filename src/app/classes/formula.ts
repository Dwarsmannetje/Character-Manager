import { Operation } from "../enums/operation";
import { VariableService } from "../variable-service.service";
import { Variable } from "./variable";

export class Formula {
    firstVariable: number | Formula | Variable;
    operation: Operation;
    secondVariable: number | Formula | Variable;
    variableService: VariableService;
  
    constructor(firstVariable: number | Formula | Variable, operation: Operation, secondVariable: number | Formula | Variable, variableService: VariableService) {
      this.firstVariable = firstVariable
      this.operation = operation
      this.secondVariable = secondVariable
      this.variableService = variableService
    }
    getVariableValue(variable: number | Formula | Variable) {
      let result = 0
      if (typeof variable === "number") {
        result = variable
      } else {
        try {
          let a: Variable = variable as Variable
          let b: Variable = this.variableService.getVariables().find((x) => a.name == x.name) as Variable
          result = b.getValue()
          
        } catch (error) {
          try {
            let b: Formula = variable as Formula
            result = b.calculate()
          } catch (error2) {
            this.variableService.log += error + " " + error2 + " "
          }
  
        }
  
      }
      return result
    }
    calculate(): number {
      let a = this.firstVariable as Formula
      let b = a.firstVariable as Variable
      let x = ["a", "b", "c"]
      let y = x
      this.variableService.log = JSON.stringify(y)
      y.push("d")
      this.variableService.log += JSON.stringify(x)
      this.variableService.log += JSON.stringify(y)
      //this.variableService.log += a + " "
      //this.variableService.log += b.getValue() + " "
      //this.variableService.log += this.secondVariable + " "
      let var1 = this.getVariableValue(this.firstVariable)
      //let var1 = 0
      let var2 = this.getVariableValue(this.secondVariable)
      //let var2 = 0
      let result = this.operation === Operation.ADD ? var1 + var2
        : this.operation === Operation.SUBTRACT
          ? var1 - var2
          : this.operation === Operation.MULTIPLY
            ? var1 * var2
            : var1 != 0 ? var1 / var2 : 0;
      result = Math.floor(result)
      return result
    }
    getCalculation() {
      let var1: String = typeof this.firstVariable === "number" ? this.firstVariable.toString() : `(${this.firstVariable.getCalculation()})`
      let var2: String = typeof this.secondVariable === "number" ? this.secondVariable.toString() : `(${this.secondVariable.getCalculation()})`
      return `${var1} ${this.operation} ${var2}`
    }
    public get getFirstVariable(): number | Formula | Variable { return this.firstVariable; }
    public set setFirstVariable(value: number | Formula | Variable) { this.firstVariable = value; }
    public get getOperation(): Operation { return this.operation; }
    public set setOperation(value: Operation) { this.operation = value; }
    public get getSecondVariable(): number | Formula | Variable { return this.secondVariable; }
    public set setSecondVariable(value: number | Formula | Variable) { this.secondVariable = value; }
  }