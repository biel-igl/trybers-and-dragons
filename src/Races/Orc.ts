import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints:number;
  private static _racesInstances = 0 ;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }
  
  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Orc._racesInstances += 1; return Orc._racesInstances;
  }
}