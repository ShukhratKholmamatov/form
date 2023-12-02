import './App.css';
import Plan from './contents/Plan';
// import Route from './contents/Route';
import Info from './contents/Info';
import AddOns from './contents/AddOns';
import Summary from './contents/Summary'
import { useState } from 'react';



function App() {

  const [content, setContent] = useState(<Info/>)

  return (
    <>
    <div className='land_page'>
      <div className='container'>
        
      <div className='route'>

<div className='steps' onClick={() => setContent(<Info/>)}> {/*STEP 1  component div */}
    <div className="round">1</div>
    <div className='step_name'>
        <p>STEP 1</p>
        <h3>YOUR INFO</h3>
    </div>
</div>

<div className='steps' onClick={() => setContent(<Plan/>)}> {/*STEP 2  component div */}
    <div className="round">2</div>
    <div className='step_name'>
        <p>STEP 2</p>
        <h3>SELECT PLAN</h3>
    </div>
</div>

<div className='steps' onClick={() => setContent(<AddOns />)  }> {/*STEP 3  component div */}
    <div className="round">3</div>
    <div className='step_name'>
        <p>STEP 3</p>
        <h3>ADD-ONS</h3>
    </div>
</div>

<div className='steps' onClick={() => setContent(<Summary/>)}> {/*STEP 4  component div */}
    <div className="round">4</div>
    <div className='step_name'>
        <p>STEP 4</p>
        <h3>SUMMARY</h3>
    </div>
</div>

</div>
        {/* <Route /> */}
        {content}

      </div>
      </div>
    </>
  );
  
}

export default App;
