export const InformationElement = (props) => {
    return (
        <div className='main'>
              <span className='name'>{props.information}</span>
              <br /> 
              <p className='text'>{props.text}</p>
              <img src={props.img} alt="" />
        </div>
    )
}