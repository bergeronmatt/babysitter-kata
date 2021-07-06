import React, {useState, useEffect} from 'react'
import Input from './Input';
import Pay from './Pay';
import StripeContainer from './StripeContainer';

export default function Main() {

    // set the state of the input form
    const [clockIn, setClockIn] = useState('');
    const [bedtime, setBedtime] = useState('');
    const [clockOut, setClockOut] = useState('');

    // hourly rate constants
    const startingRate = 12;
    const bedtimeRate = 8;
    const endingRate = 16;


    useEffect(() => {
        setClockIn(0);
        setClockOut(0);
        setBedtime(0);
    }, [])

    // console.log('bedtime time: ', bedtime);

    return (
        <div className='container background'>
            <div className="content-wrapper">
                <h1>Please Enter Times</h1>
                <Input 
                    // create props that will be passed back up from child to parent
                    clockIn={chosenClockIn => setClockIn(chosenClockIn)}
                    clockOut={chosenClockOut => setClockOut(chosenClockOut)}
                    bedtime={chosenBedtime => setBedtime(chosenBedtime)}
                />
                <Pay 
                    // pass time props and rate constants to Pay component
                    clockIn={clockIn}
                    clockOut={clockOut}
                    bedtime={bedtime}
                    startingRate={startingRate}
                    bedtimeRate={bedtimeRate}
                    endingRate={endingRate}
                />
                {/* Stretch Stripe Payment Component */}
                <StripeContainer />

                {/* Streamlined the component functionality 
                    to require less components for smaller app
                    size and faster functionality
                */}
                {/* Clockin Component */}
                {/* Clockout Component */}
                {/* Bedtime Component */}
                {/* Pay Component */}
                {/* Clear Component */}
            </div>
        </div>
    )
}
