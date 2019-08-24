import React, {useState} from 'react';
import styled from 'styled-components';

const AppElement = styled.div`
  text-align: center;
`;

const HeaderApp = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppParagraph = styled.p`
  color: white;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const AppBlock = styled.div`
  width: 15vw;
  height: 25vh;
  background-color: ${(props)=> props.clicked ? 'green': 'red'};
`;

function App() {

  const [value, setValue] = useState(false);

  return (
    <AppElement>
      <HeaderApp>
        <AppParagraph className={'AppParagraph'}>This is element to testing by cypress !</AppParagraph>
        <AppBlock clicked={value} onClick={()=> setValue(!value)} className={'OurElement'}></AppBlock>
      </HeaderApp>
    </AppElement>
  );
}

export default App;
