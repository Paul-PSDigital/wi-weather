export class City {
  coord: any         = null
  country: string    = null
  id: number         = null
  name: string       = null
  population: number = null
  sys: any           = null

  constructor(data): any {
    Object.assign(this, data)
  }
}
