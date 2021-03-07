import { StyledDiv } from '../styles/Character.style';
import { StyledButton } from '../styles/Material.style';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

interface CharProps {
  name: string;
  img: string;
}

interface Props {
  chars: CharProps[];
}

const Character: React.FC<Props> = (props: Props) => {
  let charsToPlay: CharProps[] = [];

  const addElement = () => {
    const randomElement =
      props.chars[Math.floor(Math.random() * props.chars.length)];
    if (!charsToPlay.includes(randomElement)) {
      charsToPlay.push(randomElement);
    } else {
      console.log('already in array');
    }
  };

  const populateArray = () => {
    charsToPlay = [];
    while (charsToPlay.length < 3) {
      addElement();
      console.log(charsToPlay);
    }
  };

  populateArray();
  console.log(charsToPlay);

  return (
    <Grid
      container
      spacing={3}
      direction='column'
      alignItems='center'
      justify='space-evenly'
    >
      <Grid item xs={12} sm={12}>
        <StyledButton>Generate</StyledButton>
        <button onClick={() => populateArray()}> yo </button>
      </Grid>

      <Grid container direction='row-reverse' justify='space-between'>
        <Grid item xs={4} md={4}>
          <StyledDiv>
            <img src={charsToPlay[0].img} height='150px' alt='firstChar' />
            <p>{charsToPlay[0].name}</p>
          </StyledDiv>
        </Grid>

        <Grid item xs={4} md={4}>
          <StyledDiv>
            <img src={charsToPlay[1].img} height='150px' alt='firstChar' />
            <p>{charsToPlay[1].name}</p>
          </StyledDiv>
        </Grid>

        <Grid item xs={4} md={4}>
          <StyledDiv>
            <img src={charsToPlay[2].img} height='150px' alt='firstChar' />
            <p>{charsToPlay[2].name}</p>
          </StyledDiv>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Character;
