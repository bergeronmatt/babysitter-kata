import React, {useState, useEffect} from 'react'

export default function Pay(props) {

    // pass props to variables
    // convert strings of time checks into integers for calculation
    let bedtime = parseInt(props.bedtime);
    console.log('bedtime check: ', bedtime)
    // console.log('bedtime check: ', bedtime)
    let clockIn = parseInt(props.clockIn);
    let clockOut = parseInt(props.clockOut);

    // pass constants from props to local constants
    const startingRate = props.startingRate;
    const bedtimeRate = props.bedtimeRate;
    const endingRate = props.endingRate;

    // set constants for minimum clockIn and max clockOut times
    const mandatoryClockIn = 17
    const mandatoryClockOut = 4
    const mandatoryBedtime = 0

    // function to check and see if the clockIn and ClockOut times are valid
    // if not valid, then change them to valid times

    if (clockIn < 17) {
        clockIn = mandatoryClockIn;
    }
    // console.log('clockin check: ', clockIn);

    if(clockOut > 4) {
        clockOut = mandatoryClockOut;
    }
    // console.log('clockout check: ', clockOut);

    // check to make sure that bedtime is somewhere between clockin and clockout times
    if (bedtime <= 17 || bedtime === 0) {
        bedtime = mandatoryBedtime;
    }

    // calculate the wages based on hours
    let startingWages = 0;
    let bedtimeWages = 0;
    let endingWages = 0;
    let totalWages = 0;

    // calculate wages from clockIn time to Bedtime
    // check to make sure bedtime is not at midnite to cause error in wages
    // if bedtime is at midnight, subtract hours from 24
    if(bedtime <= mandatoryBedtime) {
        bedtime = 24;
        startingWages = (bedtime - clockIn) * startingRate
    } else {
        startingWages = (bedtime - clockIn) * startingRate
    }

    // calculate wages from bedtime to midnite
    // if bedtime is equal to midnite, then bedtimeWages equals 0
    // if bedtime is before midnite, then subtract from 24
    if(bedtime === mandatoryBedtime) {
        bedtimeWages = 0;
    } else if (bedtime > 17 && bedtime < 23) {
        bedtimeWages = (24 - bedtime) * bedtimeRate;
    }


    // calculate wages from midnite to clock out
    // can set midnite time to mandatoryBedtime as that is 0 
    endingWages = (clockOut - mandatoryBedtime) * endingRate;


    // render total Wages as 0 if the value is NaN for appearance purposes


    let calculatedWages = startingWages + bedtimeWages + endingWages;

    totalWages = (isNaN(calculatedWages) ? 0 : calculatedWages);

    console.log('starting wages: ', startingWages);
    console.log('ending wages: ', endingWages);
    console.log('bedtime wages: ', bedtimeWages);
    console.log('total wages: ', totalWages);

    return (
        <div className='container'>
            <div class="pay-wrapper">
                <div class="pay-content">
                    <p>Total Wages</p>
                    <p>${totalWages}</p>
                </div>
            </div>
        </div>
    )
}
