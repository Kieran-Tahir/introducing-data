import './styles/index.scss'
import DashBoard from './DashBoard';
import DashBoardMapped from './DashBoardMapped'

function App() {
  return (
    <div className="App">
      <div className='dashboard-container'>
        <DashBoardMapped />
        <DashBoard /> 
      </div>
    </div>
  );
}

export default App;
