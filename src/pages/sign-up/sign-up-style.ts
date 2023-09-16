import styled from "styled-components";

interface InputValid {
    valid: boolean
}

export const NameInputContainer = styled.div<InputValid>`
 width: 100%;
 height: 60px;
 border: ${({valid}) => valid? '1px solid #d3d3d3' : '1px solid red'};
 border-radius: 5px;
 display: flex;
 align-items: center;
 padding: 0 16px;
 box-sizing: border-box;
 margin-top: 40px;
`;

export const Input = styled.input`
 width: 100%;
 height: 50px;
 border: none;
 outline: none;
`;

export const SecNameInputContainer = styled.div`
 width: 100%;
 height: 60px;
 border: 1px solid #d3d3d3;
 border-radius: 5px;
 display: flex;
 align-items: center;
 padding: 0 16px;
 box-sizing: border-box;
 margin-top: 40px;
`;

export const MessageContainer = styled.div`
 width: 100%;
`;

export const InputEmpty = styled.span<InputValid>`
 display: ${({valid}) => valid? 'none' : 'block'};
 font-size: 14px;
 color: red;
`;

export const EmailInputContainer = styled.div<InputValid>`
 width: 100%;
 height: 60px;
 border: ${({valid}) => valid? '1px solid #d3d3d3' : '1px solid red'};
 border-radius: 5px;
 display: flex;
 align-items: center;
 padding: 0 16px;
 box-sizing: border-box;
 margin-top: 40px;
`;

export const PasswordsContainer = styled.div`
 width: 100%;
 display: flex;
 column-gap: 15px;
`;

export const PasswordInputContainer = styled.div<InputValid>`
 width: 100%;
 height: 60px;
 border: ${({valid}) => valid? '1px solid #d3d3d3' : '1px solid red'};
 border-radius: 5px;
 display: flex;
 align-items: center;
 padding: 0 16px;
 box-sizing: border-box;
 margin-top: 40px;
`;