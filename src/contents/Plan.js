import arcade from './images/icon-arcade.svg';
import advanced from './images/icon-advanced.svg';
import pro from './images/icon-pro.svg';

const Plan = () => {
    
    return ( 
        <>
            <div className='content'>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yeraly billing.</p>
          <div className='pay_box'>
            <div className='box'>
              <img src={arcade} alt="" />
              <div>
                <h3>Arcade</h3>
                <p>$9/mo</p>
              </div>
            </div>

            <div className='box'>
              <img src={advanced} alt="" />
              <div>
                <h3>Advanced</h3>
                <p>$12/mo</p>
              </div>             
            </div>

            <div className='box'>
              <img src={pro} alt="" />
              <div>
                <h3>Pro</h3>
                <p>$15/mo</p>
              </div>             
            </div>
          </div>

          <div className='m_or_y'>
            <h3>Monthly</h3>
            <div className='toggle' id='toggle_div' ><div id='toggle'></div></div>
            <h3>Yearly</h3>
          </div>

          <Btns />

        </div>
        </>
     );
}

export function Btns(){
  return(
    <>
    <div className='btns'>
            <button className='back'>Go Back</button>
            <button>Next Step</button>
          </div>
    </>
  )
}
 
export default Plan;