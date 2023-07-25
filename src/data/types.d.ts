namespace Data {
  interface Wheel {
    durometers: string[];
    size: number;
    width: number;
    riding: number;
  }
  interface Spitfire {
    formula_four: {
      classic: {
        variants: Wheel[];
      };
      radials: {};
      radial_full: {};
      lock_in_full: {};
    };
  }
}
