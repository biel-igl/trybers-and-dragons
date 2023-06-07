import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _character1: Fighter, private _character2: Fighter) {
    super(_character1);
  }

  fight(): number {
    const lifeP1 = this._character1.lifePoints;
    const lifeP2 = this._character2.lifePoints;
    this._character1.attack(this._character2);
    this._character2.attack(this._character1);
    const divi1 = lifeP1 / (lifeP1 - this._character1.lifePoints);
    const divi2 = lifeP2 / (lifeP2 - this._character2.lifePoints);
    return (divi1 > divi2 ? 1 : -1);
  }
}