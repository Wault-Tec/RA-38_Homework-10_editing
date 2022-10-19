import './App.scss';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceSearch from './components/ServiceSearch';

function App() {
  return (
    <div className="App">
      <ServiceAdd />
      <ServiceSearch />
      <ServiceList />
    </div>
  );
}

export default App;
