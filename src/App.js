import './App.css';
import Stars from './components/Stars'

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <Stars count={-1}/>
        <Stars count={0}/>
        <Stars count={1}/>
        <Stars count={2}/>
        <Stars count={3}/>
        <Stars count={4}/>
        <Stars count={5}/>
        <Stars count={6}/>
        <Stars count={'Строка'}/>
      </div>
    </div>
  );
}

export default App;
