import { Header } from "../components/index.js";
import * as S from "../styles/Main.style.js";

export const Main = () => {
  return (
    <S.Container>
      <Header />
      <S.MainContent>
        <S.MainImage src="Campus.jpg.jpeg" alt="Campus" />
      </S.MainContent>
    </S.Container>
  );
};
