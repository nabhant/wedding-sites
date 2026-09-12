import botanicalHead from '../assets/leftBotanicalHead.png'
import botanicalStem from '../assets/leftBotanicalStem.png'

function BotanicalRight() {
  return (
    <div className="botanical-right">
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

export default BotanicalRight