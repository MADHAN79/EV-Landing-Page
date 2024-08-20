import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({ heroData, heroCount, setHeroCount,  playStatus, setPlayStatus }) => {
  return (
    <div className='hero'>
      
      <div className='hero-text'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
            {/* passing dynamic classname based on heroCount */}
            <li onClick={() => setHeroCount(0)} className={heroCount===0 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={() => setHeroCount(1)} className={heroCount===1 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={() => setHeroCount(2)} className={heroCount===2 ? "hero-dot orange" : "hero-dot"}></li>    
        </ul>
        <div className='hero-play'>
          {/* icons displayed based playStatus(video is in play/pause) */}
          {/* !playStatus - if playStatus is false, it will set that to true while onClick */}
          {/* only with this !playStatus, we can switch the logic to back and forth, cant able to give manually false&true while onClick */}
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="" />
          <p>See the video</p>
        </div>
      </div>

    </div>
  )
}

export default Hero