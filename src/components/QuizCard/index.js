import styled from 'styled-components';

const QuizCard = styled.input` 
    width: 100%;
`;

QuizCard.Input = styled.input` 
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 3.5px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.primary}; 
    display: block;
    padding: 3%;
    width: 100%;
    height: 38px;
    color: whitesmoke;
    
    font-family: 'Segoe UI', sans-serif;
    ::placeholder {
      font-style: italic; 
      padding: 3%;
      color: whitesmoke
    }
  `;

QuizCard.Button = styled.button`
    display: block;
    cursor: pointer;
    margin: 4% 0%; 
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    border-radius: 4px;
    height: 36px;
    font-family: 'Segoe UI', sans-serif;
    font-weight: bold;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.primary};

`;

export default QuizCard;
