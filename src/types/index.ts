export interface ShortPokemonObject {
  name: string
  url: string
}

export interface PokemonList {
  count: number
  next: string | null
  previous: string | null
  results: ShortPokemonObject[]
}

export interface Ability {
  ability: Ability2
  is_hidden: boolean
  slot: number
}

export interface Ability2 {
  name: string
  url: string
}

export interface Cries {
  latest: string
  legacy: string
}

export interface Form {
  name: string
  url: string
}

export interface Index {
  game_index: number
  version: Version
}

export interface Version {
  name: string
  url: string
}

export interface HeldItem {
  item: Item
  version_details: VersionDetail[]
}

export interface Item {
  name: string
  url: string
}

export interface VersionDetail {
  rarity: number
  version: Version2
}

export interface Version2 {
  name: string
  url: string
}

export interface Mfe {
  move: Move
  version_group_details: VersionGroupDetail[]
}

export interface Move {
  name: string
  url: string
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  order?: number
  version_group: VersionGroup
}

export interface MoveLearnMethod {
  name: string
  url: string
}

export interface VersionGroup {
  name: string
  url: string
}

export interface PastAbility {
  abilities: Ability3[]
  generation: Generation
}

export interface Ability3 {
  ability: any
  is_hidden: boolean
  slot: number
}

export interface Generation {
  name: string
  url: string
}

export interface PastType {
  generation: Generation2
  types: Type[]
}

export interface Generation2 {
  name: string
  url: string
}

export interface Type {
  slot: number
  type: Type2
}

export interface Type2 {
  name: string
  url: string
}

export interface Species {
  name: string
  url: string
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
  other: Other
  versions: Versions
}

export interface Other {
  dream_world: DreamWorld
  home: Home
  'official-artwork': OfficialArtwork
  showdown: Showdown
}

export interface DreamWorld {
  front_default: string
  front_female: any
}

export interface Home {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface OfficialArtwork {
  front_default: string
  front_shiny: string
}

export interface Showdown {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Versions {
  'generation-i': GenerationI
  'generation-ii': GenerationIi
  'generation-iii': GenerationIii
  'generation-iv': GenerationIv
  'generation-v': GenerationV
  'generation-vi': GenerationVi
  'generation-vii': GenerationVii
  'generation-viii': GenerationViii
}

export interface GenerationI {
  'red-blue': RedBlue
  yellow: Yellow
}

export interface RedBlue {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface Yellow {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface GenerationIi {
  crystal: Crystal
  gold: Gold
  silver: Silver
}

export interface Crystal {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

export interface Gold {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

export interface Silver {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

export interface GenerationIii {
  emerald: Emerald
  'firered-leafgreen': FireredLeafgreen
  'ruby-sapphire': RubySapphire
}

export interface Emerald {
  front_default: string
  front_shiny: string
}

export interface FireredLeafgreen {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export interface RubySapphire {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export interface GenerationIv {
  'diamond-pearl': DiamondPearl
  'heartgold-soulsilver': HeartgoldSoulsilver
  platinum: Platinum
}

export interface DiamondPearl {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface HeartgoldSoulsilver {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Platinum {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationV {
  'black-white': BlackWhite
}

export interface BlackWhite {
  animated: Animated
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Animated {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationVi {
  'omegaruby-alphasapphire': OmegarubyAlphasapphire
  'x-y': XY
}

export interface OmegarubyAlphasapphire {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface XY {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationVii {
  icons: Icons
  'ultra-sun-ultra-moon': UltraSunUltraMoon
}

export interface Icons {
  front_default: string
  front_female: any
}

export interface UltraSunUltraMoon {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationViii {
  icons: Icons2
}

export interface Icons2 {
  front_default: string
  front_female: any
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Stat2
}

export interface Stat2 {
  name: string
  url: string
}

export interface Type3 {
  slot: number
  type: Type4
}

export interface Type4 {
  name: string
  url: string
}

export interface Pokemon {
  abilities: Ability[]
  base_experience: number
  cries: Cries
  forms: Form[]
  game_indices: Index[]
  height: number
  held_items: HeldItem[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_abilities: PastAbility[]
  past_types: PastType[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type3[]
  weight: number
}

export interface ShortPokemon {
  id: number
  name: string
  types: string[]
  stats: {
    hp: number
    attack: number
    defense: number
    speed: number
    special_attack: number
    special_defense: number
  }
  image: string
}

export const typeColors: Record<string, string> = {
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-500',
  psychic: 'bg-purple-500',
  ice: 'bg-cyan-500',
  dragon: 'bg-indigo-500',
  dark: 'bg-gray-800',
  fairy: 'bg-pink-500',
  normal: 'bg-gray-500',
  fighting: 'bg-orange-600',
  poison: 'bg-purple-600',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-400',
  bug: 'bg-green-600',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-800',
  steel: 'bg-gray-600',
}

export const ALL_TYPES = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
]

export type TypeResp = {
  name: string
  pokemon: { pokemon: { name: string } }[]
  damage_relations: {
    double_damage_to: { name: string }[]
    double_damage_from: { name: string }[]
    half_damage_to: { name: string }[]
    half_damage_from: { name: string }[]
    no_damage_to: { name: string }[]
    no_damage_from: { name: string }[]
  }
}

export const ORDER = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
]

export type Row = {
  name: string
  count: number
  strong: string[]
  weak: string[]
}

export const typeChart = {
  normal: { weak: ['fighting'], resist: [], immune: ['ghost'] },
  fire: {
    weak: ['water', 'ground', 'rock'],
    resist: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'],
    immune: [],
  },
  water: {
    weak: ['electric', 'grass'],
    resist: ['fire', 'water', 'ice', 'steel'],
    immune: [],
  },
  electric: {
    weak: ['ground'],
    resist: ['electric', 'flying', 'steel'],
    immune: [],
  },
  grass: {
    weak: ['fire', 'ice', 'poison', 'flying', 'bug'],
    resist: ['water', 'electric', 'grass', 'ground'],
    immune: [],
  },
  ice: {
    weak: ['fire', 'fighting', 'rock', 'steel'],
    resist: ['ice'],
    immune: [],
  },
  fighting: {
    weak: ['flying', 'psychic', 'fairy'],
    resist: ['bug', 'rock', 'dark'],
    immune: [],
  },
  poison: {
    weak: ['ground', 'psychic'],
    resist: ['grass', 'fighting', 'poison', 'bug', 'fairy'],
    immune: [],
  },
  ground: {
    weak: ['water', 'grass', 'ice'],
    resist: ['poison', 'rock'],
    immune: ['electric'],
  },
  flying: {
    weak: ['electric', 'ice', 'rock'],
    resist: ['grass', 'fighting', 'bug'],
    immune: ['ground'],
  },
  psychic: {
    weak: ['bug', 'ghost', 'dark'],
    resist: ['fighting', 'psychic'],
    immune: [],
  },
  bug: {
    weak: ['fire', 'flying', 'rock'],
    resist: ['grass', 'fighting', 'ground'],
    immune: [],
  },
  rock: {
    weak: ['water', 'grass', 'fighting', 'ground', 'steel'],
    resist: ['normal', 'fire', 'poison', 'flying'],
    immune: [],
  },
  ghost: {
    weak: ['ghost', 'dark'],
    resist: ['poison', 'bug'],
    immune: ['normal', 'fighting'],
  },
  dragon: {
    weak: ['ice', 'dragon', 'fairy'],
    resist: ['fire', 'water', 'electric', 'grass'],
    immune: [],
  },
  dark: {
    weak: ['fighting', 'bug', 'fairy'],
    resist: ['ghost', 'dark'],
    immune: ['psychic'],
  },
  steel: {
    weak: ['fire', 'fighting', 'ground'],
    resist: [
      'normal',
      'grass',
      'ice',
      'flying',
      'psychic',
      'bug',
      'rock',
      'dragon',
      'steel',
      'fairy',
    ],
    immune: ['poison'],
  },
  fairy: {
    weak: ['poison', 'steel'],
    resist: ['fighting', 'bug', 'dark'],
    immune: ['dragon'],
  },
}

export type EvoNode = {
  id: number
  name: string
  image: string
  from?: string | null
  minLevel?: number | null
  trigger?: string | null
  item?: string | null
  timeOfDay?: string | null
  moveType?: string | null
  location?: string | null
}

export type SpeciesResp = { evolution_chain: { url: string } }
export type EvolutionNode = {
  species: { name: string; url: string }
  evolves_to: EvolutionNode[]
  evolution_details: Array<{
    min_level: number | null
    trigger?: { name: string }
    item?: { name: string } | null
    held_item?: { name: string } | null
    time_of_day?: string
    known_move_type?: { name: string } | null
    location?: { name: string } | null
  }>
}
export type EvolutionChainResp = { chain: EvolutionNode }

export type EvolutionDetail = {
  min_level: number | null
  trigger?: { name: string } | null
  item?: { name: string } | null
  held_item?: { name: string } | null
  time_of_day?: string | null
  known_move_type?: { name: string } | null
  location?: { name: string } | null
}

export type SpeciesBreeding = {
  gender_rate: number
  hatch_counter: number
  egg_groups: { name: string; url: string }[]
  capture_rate: number
  base_happiness: number | null
  growth_rate: { name: string; url: string } | null
}

export type RegionRow = {
  id: number
  name: string
  generation: string | null
  pokedexes: string[]
  versionGroups: string[]
  locationsCount: number
}

export type NamedAPI = { name: string; url: string }

export type RegionDetail = {
  id: number
  name: string
  main_generation: NamedAPI | null
  pokedexes: NamedAPI[]
  version_groups: NamedAPI[]
  locations: NamedAPI[]
}

export const REGIONS = [
  'kanto',
  'johto',
  'hoenn',
  'sinnoh',
  'unova',
  'kalos',
  'alola',
  'galar',
  'hisui',
  'paldea',
]

export type FlatNode = {
  name: string
  id: number
  from?: string
  stage: number
  minLevel: number | null
  trigger: string | null
  item: string | null
  timeOfDay: string | null
  moveType: string | null
  location: string | null
}

export type EvoDetail = {
  min_level?: number | null
  trigger?: { name: string } | null
  item?: { name: string } | null
  held_item?: { name: string } | null
  time_of_day?: string | null
  known_move_type?: { name: string } | null
  location?: { name: string } | null
}

export const ALL_REGIONS = [
  'kanto',
  'johto',
  'hoenn',
  'sinnoh',
  'unova',
  'kalos',
  'alola',
  'galar',
  'paldea',
]

export type RegionResp = { pokedexes: { name: string; url: string }[] }
export type PokedexResp = {
  pokemon_entries: { pokemon_species: { name: string; url: string } }[]
}
export type SpeciesVariety = {
  is_default: boolean
  pokemon: { name: string; url: string }
}
export type SpeciesFull = { name: string; varieties: SpeciesVariety[] }
