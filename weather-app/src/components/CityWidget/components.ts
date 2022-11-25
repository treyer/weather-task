import styled from "styled-components";

type Prop = {
  screenWidth: number;
};

const Wrapper = styled.div<Prop>`
  display: flex;
  flex-direction: column;
  justify-content: end;

  padding-right: ${({ screenWidth, theme }) =>
    screenWidth > theme.size.small ? theme.sizes[5] - 5 : theme.sizes[2]}px;
  padding-left: ${({ screenWidth, theme }) =>
    screenWidth > 535 ? 0 : theme.sizes[2]}px;
  padding-top: ${({ screenWidth, theme }) =>
    screenWidth > 535 ? 0 : theme.sizes[0]}px;

  color: ${({ theme }) => theme.colors.white};
`;

export default Wrapper;
