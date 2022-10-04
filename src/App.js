import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(89);
  const [bottles, setBottles] = useState(3);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0.4);

  function handleSubmit(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsleft = grams - (burning * time);
    
    let result = 0;
    if (gender === 'male') {
      result = gramsleft / (weight * 0.7)
    } else {
      result = gramsleft / (weight * 0.6)
    }
    setResult(result);
  }

  return (
    <div className="p-5">
      <h3 class="mb-3 p-3 bg-danger rounded text-white">Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit} class="p-3 bg-info rounded">
        <div>
          <label class="form-label">Weight </label>
          <input name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)} class="form-control"></input>
        </div>
        <div>
        <label class="form-label">Bottles </label>
          <input name="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)}  class="form-control"></input>
        </div>
        <div>
        <label class="form-label">Time </label>
          <input name="time" type="number" value={time} onChange={e => setTime(e.target.value)}  class="form-control"></input>
        </div>
        <div class="mt-2">
          <label class="form-label">Gender </label>
          <div>
            <input type="radio" name="gender" id="1" value="male" defaultChecked onChange={e => setGender(e.target.value)} class="form-check-input mx-2"/><label for="1">Male</label>
            <input type="radio" name="gender" id="2"  value="female" onChange={e => setGender(e.target.value)} class="form-check-input mx-2"/><label for="2">Female</label>
          </div>
          
        </div>
        <div class="my-4">
          <h4>Your alcohol blood level: {result.toFixed(1)}</h4>
        </div>
        <button class="btn btn-primary">Calculate</button>
      </form>
    </div>
  );
}

export default App;

