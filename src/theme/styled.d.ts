import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gallery: string;
      silver: string;
      white: string;
    };
  }
}
