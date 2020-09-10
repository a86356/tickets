import React, {FC, useMemo} from "react";
import classnames from 'classnames'
import './index.css'
import dayjs from "dayjs";
import 'dayjs/locale/zh-cn';
type Props={
    prev:()=>void,
    next:()=>void,
    date:string,
    isPrevDisabled:boolean,
    isNextDisabled:boolean
}

const Nav:FC<Props> = (props:Props):JSX.Element=>{
    const {
        prev,
        next,
        date,
        isPrevDisabled,
        isNextDisabled
    } = props

    const currentString = useMemo(() => {
        const d = dayjs(date);

        return d.format('M月D日 ') + d.locale('zh-cn').format('ddd');
    }, [date]);

    return (
        <div className="nav">
            <span
                onClick={prev}
                className={classnames('nav-prev', {
                    'nav-disabled': isPrevDisabled,
                })}
            >
                前一天
            </span>
            <span className="nav-current">{ currentString }</span>
            <span
                onClick={next}
                className={classnames('nav-next', {
                    'nav-disabled': isNextDisabled,
                })}
            >
                后一天
            </span>
        </div>
    )
}

export default Nav