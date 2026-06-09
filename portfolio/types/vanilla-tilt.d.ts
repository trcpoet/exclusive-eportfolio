declare module "vanilla-tilt" {
  export interface VanillaTiltOptions {
    max?: number;
    speed?: number;
    glare?: boolean;
    "max-glare"?: number;
    scale?: number;
    gyroscope?: boolean;
  }

  export default class VanillaTilt {
    static init(
      elements: HTMLElement | HTMLElement[],
      options?: VanillaTiltOptions
    ): void;
  }
}
