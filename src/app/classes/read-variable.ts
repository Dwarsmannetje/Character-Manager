
import { Table } from "./table";
import { Variable } from "./variable";

export class ReadVariable extends Variable {
    override getValue(): number {
      return this.value
    }
    override returnType() {
      return ReadVariable
    }
    table: Table
    constructor(name: String, table: Table) {
      super(name);
      this.table = table
    }
  }