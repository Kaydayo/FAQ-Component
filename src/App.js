import './App.css';
import Accords from './Accords'

import { data } from './data'
function App() {
  return (
    <div className="content">
      <div>
        <h4>Questions and answers about login</h4>
      </div>
      <div>
        {data.map(question => < Accords key={question.id} {...question} />)}
      </div>
    </div>
  );
}

export default App;
