import React from 'react'

type propsType = {
    text1: string;
    text2: string;
    clicked: boolean;
}

const NavbarDropdown = (props : propsType) => {

    if(props.clicked){
        return (
            <div className='w-full flex flex-col'>
                <div>{props.text1}</div>
                <div>{props.text2}</div>
            </div>
        )
    }
}

export default NavbarDropdown