import { Column } from "./column"
import { Row } from "./row"

export class Table {
    name: String
    rows: Row[]
    constructor(name: String, rows: Row[]) {
      this.name = name
      this.rows = rows
    }
    addColumn(column: Column) {
      this.rows.map((a) => a.addCollumn(column))
    }
  }