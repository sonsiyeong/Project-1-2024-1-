import styled from 'styled-components';

// TODO: 이대 메인 이미지 스크롤 안생기게 수정 필요
export const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  height: 100vh;
`;

export const MainContent = styled.main`
  width: 100%;
  height: auto;
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  max-height: calc(100vh - 80px);
  /* Subtract header height from viewport height */
  object-fit: cover;
`;
