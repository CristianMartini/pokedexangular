export class Pokemon {
  public id: number;
  public name: string;
  public types: string[];
  public health: number;
  public physicalAttack: number;
  public physicalDefense: number;
  public specialAttack: number;
  public specialDefense: number;
  public speed: number;
  public specialAbilities: string[];
  public evolution: string;
  public attacks: string[];
  public level: number;
  public experiencePoints: number;
  public gender: string;
  public captureDifficulty: string;
  public description: string;
  public dimensions: string;
  public image: string; // Novo campo para receber o link da imagem
  public region: string;
 

  constructor(
    id: number,
    name: string,
    types: string[],
    health: number,
    physicalAttack: number,
    physicalDefense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number,
    specialAbilities: string[],
    evolution: string,
    attacks: string[],
    level: number,
    experiencePoints: number,
    gender: string,
    captureDifficulty: string,
    description: string,
    dimensions: string,
    image: string, // Novo parâmetro para o link da imagem
    region: string,
  
  ) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.health = health;
    this.physicalAttack = physicalAttack;
    this.physicalDefense = physicalDefense;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
    this.specialAbilities = specialAbilities;
    this.evolution = evolution;
    this.attacks = attacks;
    this.level = level;
    this.experiencePoints = experiencePoints;
    this.gender = gender;
    this.captureDifficulty = captureDifficulty;
    this.description = description;
    this.dimensions = dimensions;
    this.image = image; // Atribui o link da imagem ao novo campo
    this.region = region;
   
  }

}

