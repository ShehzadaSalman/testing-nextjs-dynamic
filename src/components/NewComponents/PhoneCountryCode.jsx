import React, { useState, useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input';
const PhoneCountryCode = () => {
    const countryInput = useRef();
    useEffect(() => {

        console.log("the use Effect is running again and again ");
        intlTelInput(countryInput.current, {
            separateDialCode: true,
            initialCountry: 'AE',
            // any initialisation options go here
        });

    }, []);


    return (
        <React.Fragment>
            <input
                ref={countryInput}
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="50 123 4567"
                pattern="[0-9]{9,11}"
                required
            />
            <label className="invisible" htmlFor="phone">PHONE</label>
        </React.Fragment>
    );
}

export default PhoneCountryCode;