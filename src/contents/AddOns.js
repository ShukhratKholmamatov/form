    import {Btns} from './Plan';

const AddOns = () => {
    return ( 
        <>
            <div className="content">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience</p>
                <div className="check_boxes">

                    <div className="check_box">
                        <input type="checkbox" />
                        <div className='description' >
                            <h3>Online service</h3>
                            <p>Access to multiple games</p>
                        </div>
                        <p>+1$/mo</p>
                    </div>

                    <div className="check_box">
                        <input type="checkbox" />
                        <div className='description' >
                            <h3>Larger storage</h3>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                        <p>+2$/mo</p>
                    </div>

                    <div className="check_box">
                        <input type="checkbox" />
                        <div className='description' >
                            <h3>Customizable profile</h3>
                            <p>Custom theme on your profile</p>
                        </div>
                        <p>+2$/mo</p>
                    </div>

                </div>

                <Btns/>

            </div>
        </>
     );
}
 
export default AddOns;