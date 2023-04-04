import { InformationElement } from './InformationElement'




export const InformationSection = (props) => {
    return (
        <div className='sub-div'>
            <h1 className='header'>{props.headerName}</h1>
            {props.data.map((dataElement, index) => {
                return (
                    <InformationElement key={index} information = {dataElement}/>
                )
            })}

            {/* <h2 className="text">{props.person}</h2> */}
            <img className="image" src={props.img} alt="" />
        </div>
    )
}

// export default app