import './styles/index.scss'
import DashBoard from './DashBoard';
import DashBoardMapped from './DashBoardMapped'
import Dexie from 'dexie';

function App() {
  return (
    <div className="App">
      <div className='dashboard-container'>
        <DashBoardMapped />
      </div>
    </div>
  );
}

export default App;
