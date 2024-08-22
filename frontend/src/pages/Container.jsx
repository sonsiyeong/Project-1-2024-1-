import { Header } from "../components";
import * as S from "../styles/Main.styles";

export const Container = ({ children }) => {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
};
export default Container;
