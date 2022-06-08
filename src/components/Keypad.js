import React, { useState } from "react"
;
const Keypad = () => {
    const [passwordIs, setPasswordIs] = useState('')
    function changer(e){
        setPasswordIs(e.target.value)
        console.log('Entering password...')
        console.log(e.target.value)
    }
    return (
        <input onChange={changer} type="password" />
    )
}

export default Keypad