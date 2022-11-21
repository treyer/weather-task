import styled from "styled-components";

const UpdateButton = styled.button`
  width: 40px;
  height: 38px;

  background: url(/assets/svg/update_weather.svg) center center no-repeat;
  background-size: 40px 38px;
  border: none;
  padding-left: 0;
  margin-right: 10px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export default UpdateButton;
