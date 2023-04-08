import styled from 'styled-components';

export const StyledContactForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0.5rem 0.5rem 2rem rgb(167, 164, 164),
    -0.5rem -0.5rem 2rem rgb(172, 171, 171);

  label {
    margin-bottom: 10px;
    color: #000;
  }

  label:last-child {
    margin-bottom: 0px;
  }

  .inputName {
    margin-left: 28px;
  }
  .inputNumber {
    margin-left: 10px;
  }
`;
