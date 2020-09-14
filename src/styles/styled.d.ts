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
      sixthary: string;
      seventhary: string;
      eigthary: string;
      ninethary: string;
      tenthary: string;

      background: string;
      text: string;
    };
  }
}
