import logo from './logo.svg';

import Background from './casino-poker-bg.jpg';


import './App.css';
import BoardComponent from './Components/Board/Board.component'


var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};

function App() {
  return (
    <div className="App">
      <section style={ sectionStyle }>
      <BoardComponent/>
      </section>
    </div>
  );
}

export default App;
