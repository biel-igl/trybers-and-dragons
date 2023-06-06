import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints:number;
  private static _racesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }
  
  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Elf._racesInstances += 1; return Elf._racesInstances;
  }
}