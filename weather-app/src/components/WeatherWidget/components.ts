import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 60px);
  margin: 0 ${({ theme }) => theme.sizes[3]}px;
`;

export default Wrapper;
