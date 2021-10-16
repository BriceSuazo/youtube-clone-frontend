import './App.css';
import Header from './components/Header/Header';
// import Chips from './components/Chips/Chips';
import LeftNavigation from './components/LeftNavigation/LeftNavigation';
import Contents from './components/Contents/Contents';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container-vertical">
        <LeftNavigation className="left-nav"/>
        <div className="content-container-horizontal">
          {/* <Chips /> */}
          <Contents />
        </div>
      </div>
    </div>
  );
}

export default App;
