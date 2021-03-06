import { isBreakStatement } from "typescript";

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
      <div>
        <img src={props.chars[0].name} height="150px" />
        <p></p>
      </div>
    </div>
  );
};

export default Character;
