import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      thirdary: string;
      fourthary: string;
      fifthary: string;

      background: string;
      text: string;
    };
  }
}
