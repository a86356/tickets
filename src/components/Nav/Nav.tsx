import React, {FC} from "react";
import './index.css'

type Props={
    onBack:()=>void,
    title:string
}

const Nav:FC<Props> = (props:Props):JSX.Element=>{
    const {title,onBack} = props

    return (
        <div className={"header"}>
          123
        </div>
    )
}

export default Nav