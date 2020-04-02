export default class Player {
  public id!: number;
  public team: number;
  public name: string;
  public rating: number;

  constructor(name: string, rating: number) {
    this.name = name;
    this.rating = rating;
    this.team = -1; // -1 is free agent
  }
}
