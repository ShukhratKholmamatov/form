import {Btns} from './Plan';

const Summary = () => {
    return ( 
        <>
            <div className='content'>
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming</p>
                <div className='cheqeue'>

                    <div className='arcadeT'>
                        <div>
                            <h3>Arcade (Yearly)</h3>
                            <p>Change</p>
                        </div>
                        <h5>$90/yr</h5>
                    </div>

                    <div className='online_service'>
                         <h6>Online service</h6>
                         <h5>+$10/yr</h5>
                    </div>

                    <div className='online_service'>
                         <h6>Larger storage</h6>
                         <h5>+$20/yr</h5>
                    </div>

                </div>

                <div className='total'>
                         <h6>Total (per year)</h6>
                         <h5>$120/yr</h5>
                </div>

                <Btns/>
            </div>
        </>
     );
}
 
export default Summary;