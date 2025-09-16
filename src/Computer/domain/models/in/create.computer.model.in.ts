export class CreateComputerModelIn {
  constructor(
    public readonly name: string,
    public readonly color: string,
    public readonly fabricationDate: Date,
  ) {}
}
