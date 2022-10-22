import './style/cards.css'

export default function card(props) {
    return (
    <div className="card">
        <img className="card__img" src = {props.img}/>   
        <div className='Name'>{props.name.split(' ')[0]}<br/>{props.name.split(' ')[1]}</div>
        
    </div>
    );
  }

 