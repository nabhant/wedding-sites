import botanicalHead from '../assets/leftBotanicalHead.png'
import botanicalStem from '../assets/leftBotanicalStem.png'

function BotanicalLeft() {
  return (
    <div className="botanical-left">
      <img
        src={botanicalStem}
        alt=""
        className="botanical-stem-image"
      />

      <img
        src={botanicalHead}
        alt=""
        className="botanical-head-image"
      />
    </div>
  )
}

export default BotanicalLeft