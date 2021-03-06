import { StyledDiv } from "../styles/Character.style";

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
      console.log("already in array");
    }
  };

  const populateArray = () => {
    while (charsToPlay.length < 3) {
      addElement();
    }
  };

  populateArray();
  console.log(charsToPlay);

  return (
    <div>
      <StyledDiv>
        <img src={charsToPlay[0].img} height="150px" />
        <p>{charsToPlay[0].name}</p>
      </StyledDiv>
      <StyledDiv>
        <img src={charsToPlay[1].img} height="150px" />
        <p>{charsToPlay[1].name}</p>
      </StyledDiv>
      <StyledDiv>
        <img src={charsToPlay[2].img} height="150px" />
        <p>{charsToPlay[2].name}</p>
      </StyledDiv>
    </div>
  );
};

export default Character;
