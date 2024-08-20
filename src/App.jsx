import { useState } from "react"
import Background from "./components/Background/Background";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


const App = () => {

  //its get displayed based on the heroCount state.
  let heroData = [
      {text1: "Dive into",text2: "what you love"},
      { text1: "Induge",text2: "your passions"},
      {text1: "Give in to",text2: "your passions"},      
  ]

  //for changing the text | 2 - image 2 will be displayed by default
  const [heroCount, setHeroCount] = useState(2);

  //for playing or pause the video. | false - video dont play.
  const [playStatus, setPlayStatus] = useState(false); 


  return (
    <div>

      {/* passing the props to background component */}
      <Background playStatus={playStatus} heroCount={heroCount} />
      
      <Navbar  />

      {/* with this we can change the state of playStatus to true(video-play) / false(video-pause) */}
      <Hero 
        setPlayStatus={setPlayStatus} 
        heroData={heroData[heroCount]} 
        heroCount={heroCount} 
        setHeroCount={setHeroCount}  
        playStatus={playStatus}  
      />

    </div>
  )
}

export default App