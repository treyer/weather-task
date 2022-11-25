import styled from "styled-components";

const UpdateButton = styled.button`
  width: ${({ theme }) => theme.sizes[4]}px;
  height: ${({ theme }) => theme.sizes[4] - 2}px;

  background: url(/assets/svg/update_weather.svg) center center no-repeat;
  background-size: ${({ theme }) => theme.sizes[4]}px
    ${({ theme }) => theme.sizes[4] - 2}px;
  border: none;
  padding-left: 0;
  margin-right: ${({ theme }) => theme.sizes[0] - 2}px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export default UpdateButton;
