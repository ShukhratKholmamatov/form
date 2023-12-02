import {Btns} from './Plan'
const Info = () => {
    return ( 
        <>
            <div className="content">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <div className="inputs">
                    <label>Name</label>
                    <input type="text" placeholder="e.g. Stephen King" />
                    <label>Email Address</label>
                    <input type="email" placeholder="e.g. stephenking@lorem.com" />
                    <label>Phone Number</label>
                    <input type="text" placeholder="e.g. +1 234 567 890" />
                </div>
                <Btns />
            </div>
        </>
     );
}
 
export default Info;