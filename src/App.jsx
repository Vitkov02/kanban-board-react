import Input from "./components/Input";
import Tasks from "./components/Tasks";

import './style/index.scss';

function App() {
  return (
    <main className="main">
      <div className="container">
        <Input/>
        <Tasks/>
      </div>
    </main>
)}

export default App;
