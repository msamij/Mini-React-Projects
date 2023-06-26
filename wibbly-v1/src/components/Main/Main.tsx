import './Main.css';
import Heading from '../UI/Heading/Heading';
import FigureContainer from './FigureContainer/FigureContainer';

function Main() {
  return (
    <main className="main">
      <Heading headingTitle="Hotels 🏨"></Heading>
      <FigureContainer />
      <Heading headingTitle="Tours ⛰️" />
      <FigureContainer />
      <Heading headingTitle="Activities 🏊🏻‍♂️" />
      <FigureContainer />
    </main>
  );
}

export default Main;
