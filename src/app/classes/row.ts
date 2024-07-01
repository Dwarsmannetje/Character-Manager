import { Column } from "./column"

export class Row {
    name: String
    columns: Column[]
    constructor(name: String, columns: Column[]) {
      this.name = name
      this.columns = columns
    }
    public addCollumn(column: Column) {
      this.columns.push(column)
      return this.columns
    }
    updateColumn(id: number, column: Column) {
      this.columns[id] = column
      return this.columns
    }
    findColumnId(name: String) {
      return this.columns.findIndex((a) => a.name = name)
    }
    getColumn(id: number) {
      return this.columns[id]
    }
  }