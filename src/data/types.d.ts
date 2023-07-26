namespace Data {
  interface Wheel {
    durometers: string[];
    size: number;
    width: number;
    riding: number;
  }
  interface FFWheelVariants {
    classic: Wheel[];
    radials: Wheel[];
    conical: Wheel[];
    radial_full: Wheel[];
    lock_in_full: Wheel[];
  }
  interface Spitfire {
    formula_four: FFWheelVariants;
  }
}
