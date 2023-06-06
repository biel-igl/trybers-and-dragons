import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _spendsAbility : EnergyType;
  private static _archetypeInstances = 0;
  
  constructor(name:string) {
    super(name);
    this._spendsAbility = 'stamina';
  }

  get energyType(): EnergyType { return this._spendsAbility; }

  static createdArchetypeInstances(): number {
    Warrior._archetypeInstances += 1; return Warrior._archetypeInstances;
  }
}