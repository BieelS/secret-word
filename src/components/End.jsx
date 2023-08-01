/* eslint-disable react/prop-types */
import './End.css'

const End = ({ retry }) => {
  return ( 
    <div>
      <h1>End</h1>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}

export default End