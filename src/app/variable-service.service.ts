import { Injectable, Type } from '@angular/core';
import { Variable } from './classes/variable';
import { GivenVariable } from './classes/given-variable';
import { CalculatedVariable } from './classes/calculated-variable';
import { ReadVariable } from './classes/read-variable';
import { Formula } from './classes/formula';
import { Operation } from './enums/operation';
import { Property } from './enums/property';

@Injectable({
  providedIn: 'root'
})

export class VariableService {
  variables: Variable[] = []
  givenVariables: GivenVariable[] = []
  calculatedVariables: CalculatedVariable[] = []
  readVariables: ReadVariable[] = []
  log: String = ""
  constructor() {
    for (const name of ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]) {
      let variable = new GivenVariable(name)
      variable.addProperty(Property.AbilityScore)
      this.addVariable(variable)
      let formula = new Formula(variable, Operation.SUBTRACT, 10, this)
      //let formula2 = new Formula(variable.getValue() - 10, Operation.DIVIDE, 2, this)
      let formula2 = new Formula(formula, Operation.DIVIDE, 2, this)
      let variable2Name = variable.name + "Modifier"
      let variable2 = new CalculatedVariable(variable2Name, formula2)
      variable2.addProperty(Property.AbilityModifier)
      this.addVariable(variable2)
    }
    //let variable = new CalculatedVariable("test", new Formula(this.variables.find((a) => a.name == "strength")? this.variables.find((a) => a.name == "strength") as Variable : 3, Operation.MULTIPLY, 4))
    //this.addVariable(variable)
  }

  addVariable(variable: GivenVariable | CalculatedVariable | ReadVariable) {
    if (variable.returnType() === GivenVariable) {
      this.givenVariables.push(variable as GivenVariable)
    }
    if (variable.returnType() === CalculatedVariable) {
      this.calculatedVariables.push(variable as CalculatedVariable)
    }
    if (variable.returnType() === ReadVariable) {
      this.readVariables.push(variable as ReadVariable)
    }
    this.variables.push(variable)
  }
  getVariables() {
    return this.variables
  }
  getVariablesWithProperty(property: Property) {
    return this.variables.filter((a) => a.properties.find((b) => b == property))
  }
  updateVariable(id: number, variable: Variable) {
    this.variables[id] = variable
  }
}









