import { Type } from "@angular/core";
import { GivenVariable } from "./given-variable";
import { CalculatedVariable } from "./calculated-variable";
import { ReadVariable } from "./read-variable";
import { Property } from "../enums/property";

export abstract class Variable {
    [x: string]: any;
    name: String;
    properties: Property[] = []
    value = 0
    constructor(name: String) {
      this.name = name
    }
    abstract returnType(): Type<GivenVariable | CalculatedVariable | ReadVariable>
  
    addProperty(property: Property) {
      this.properties.push(property)
    }
    getProperties() {
      return this.properties
    }
    getProperty(property: Property) {
      return this.properties.find((a) => a == property)
    }
    abstract getValue(): number
  }