import styled from 'styled-components';

export const StyledContactList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .item {
    background-color: #fff;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    box-shadow: 0.5rem 0.5rem 2rem rgb(167, 164, 164),
      -0.5rem -0.5rem 2rem rgb(172, 171, 171);
  }

  .contact {
    margin-right: 30px;
  }
`;
