import { Header } from './components';
import * as S from './main.style.js';

const Main = () => {
  return (
    <S.Container>
      <Header />
      <S.MainContent>
        <S.MainImage src="Campus.jpg.jpeg" alt="Campus" />
      </S.MainContent>
    </S.Container>
  );
};

export default Main;
