import Input from "./components/Input";
import Buttons from "./components/Buttons";
import Column from "./components/Column";
import Form from "./components/Form";

import './style/index.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <Input/>
          <Buttons/>  
        </header>   
        <main className="main">
            <Column>
              <Form/>
            </Column>
            <Column>
              <Form/>
            </Column>
            <Column>
              <Form/>
            </Column>
        </main>   
      </div>
    </div>
  );
}

export default App;
