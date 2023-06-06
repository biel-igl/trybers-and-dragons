import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints:number;
  private static _racesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }
  
  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Dwarf._racesInstances += 1; return Dwarf._racesInstances;
  }
}