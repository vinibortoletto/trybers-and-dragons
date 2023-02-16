import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _instances = 0;

  constructor(
    name:string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Orc._instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
