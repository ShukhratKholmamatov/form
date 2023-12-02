const Route = () => {
    return ( 
        <>
        <div className='route'>

            <div className='steps'> {/*STEP 1  component div */}
                <div className="round">1</div>
                <div className='step_name'>
                    <p>STEP 1</p>
                    <h3>YOUR INFO</h3>
                </div>
            </div>

            <div className='steps'> {/*STEP 2  component div */}
                <div className="round">2</div>
                <div className='step_name'>
                    <p>STEP 2</p>
                    <h3>SELECT PLAN</h3>
                </div>
            </div>

            <div className='steps'> {/*STEP 3  component div */}
                <div className="round">3</div>
                <div className='step_name'>
                    <p>STEP 3</p>
                    <h3>ADD-ONS</h3>
                </div>
            </div>

            <div className='steps'> {/*STEP 4  component div */}
                <div className="round">4</div>
                <div className='step_name'>
                    <p>STEP 4</p>
                    <h3>SUMMARY</h3>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default Route;