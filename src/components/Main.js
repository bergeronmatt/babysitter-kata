import React, {useState} from 'react'
import Input from './Input';

export default function Main() {

    // set the state of the input form
    const [clockIn, setClockIn] = useState('');
    const [bedtime, setBedtime] = useState('');
    const [clockOut, setClockOut] = useState('');

    return (
        <div className='container background'>
            <div className="content-wrapper">
                <p>This is the main component</p>
                <Input 
                    clockIn={chosenClockIn => setClockIn(chosenClockIn)}
                    clockOut={chosenClockOut => setClockOut(chosenClockOut)}
                    bedtime={chosenBedtime => setBedtime(chosenBedtime)}
                />
                {/* Clockin Component */}
                {/* Clockout Component */}
                {/* Bedtime Component */}
                {/* Pay Component */}
                {/* Clear Component */}
            </div>
        </div>
    )
}
