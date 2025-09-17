export class ComputerModelOut {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly color: string,
    public readonly fabricationDate: string,
    public readonly peripherics: string[],
  ) {}
}
