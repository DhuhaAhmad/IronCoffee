export class Coffee {
  constructor(
    private _image_url: string,
    private _id: string,
    private _name: string,
    private _tagline: string,
    private _description: string,
    private _first_roasted: string,
    private _roaster_tips: string,
    private _strength_level: number,
    private _contributed_by: string,
    private _expireAt: string
  ) {}

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get image_url(): string {
    return this._image_url;
  }

  set image_url(value: string) {
    this._image_url = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get tagline(): string {
    return this._tagline;
  }

  set tagline(value: string) {
    this._tagline = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get first_roasted(): string {
    return this._first_roasted;
  }

  set first_roasted(value: string) {
    this._first_roasted = value;
  }

  get roaster_tips(): string {
    return this._roaster_tips;
  }

  set roaster_tips(value: string) {
    this._roaster_tips = value;
  }

  get strength_level(): number {
    return this._strength_level;
  }

  set strength_level(value: number) {
    this._strength_level = value;
  }

  get contributed_by(): string {
    return this._contributed_by;
  }

  set contributed_by(value: string) {
    this._contributed_by = value;
  }

  get expireAt(): string {
    return this._expireAt;
  }

  set expireAt(value: string) {
    this._expireAt = value;
  }
}
