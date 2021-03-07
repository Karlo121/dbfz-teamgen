import { characters } from './data/data';
import { useState } from 'react';
import Character from './components/Character';
import Header from './components/Header';
import { StyledWrapper, StyledBody } from './styles/global.styles';

function App() {
  const [chars, setChars] = useState(characters);
  return (
    <StyledBody>
      <StyledWrapper>
        <Header />
        <Character chars={chars} />
      </StyledWrapper>
    </StyledBody>
  );
}

export default App;
