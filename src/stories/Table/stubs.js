import { columns } from './columns.js'

const item = columns.reduce((acc, column) => ({ [column]: column, ...acc }), {})

export const stubs = Array.from({ length: 1000 }, (v, k) => item)
