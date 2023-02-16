import styled from "styled-components";

export const ModalForm = styled.div`
text-align: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      width: 100%;
      margin-top: 2%;
      padding: 20px 0px;
      border: 1px solid grey;
      border-radius: 15px;
    }
    input::placeholder {
      padding-left: 15px;
    }
    button {
      width: 100%;
      border-radius: 15px;
      padding: 20px 10px;
      background-color: #8dd54f;
      margin-top: 2%;
      border: 1px solid #8dd54f;
      color: white;
      font-size: 20px;
    }
  }
`;
