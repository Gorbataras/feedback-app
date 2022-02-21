import Card from './shared'

function FeebackItem({item}) {
  
  return (
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </div>
  )
}

export default FeebackItem