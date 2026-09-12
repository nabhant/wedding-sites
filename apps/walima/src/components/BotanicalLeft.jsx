import botanicalHead from '../assets/leftBotanicalHead.PNG'
import botanicalStem from '../assets/leftBotanicalStem.PNG'

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