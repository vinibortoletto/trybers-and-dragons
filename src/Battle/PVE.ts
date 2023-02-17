import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _enemyList: (Fighter | SimpleFighter)[],
  ) {
    super(_player);
  }

  fight(): number {
    while (
      this._player.lifePoints > 0 
      && this._enemyList.some((enemy) => enemy.lifePoints > 0)
    ) {
      this._enemyList.forEach((enemy) => {
        this._player.attack(enemy);

        if (enemy.lifePoints > 0) {
          enemy.attack(this._player);
        }
      });
    }

    return super.fight();
  }
}
