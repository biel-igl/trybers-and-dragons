import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _spendsAbility : EnergyType;
  private static _archetypeInstances = 0;
  
  constructor(name:string) {
    super(name);
    this._spendsAbility = 'mana';
  }

  get energyType(): EnergyType { return this._spendsAbility; }

  static createdArchetypeInstances(): number {
    Mage._archetypeInstances += 1; return Mage._archetypeInstances;
  }
}