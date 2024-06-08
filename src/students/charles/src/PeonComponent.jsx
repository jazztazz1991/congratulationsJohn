
import './App.css'
import Canvas from './components/Canvas.jsx'
import Peon from './peon.js'
import VideoBackground from './components/VideoBackground.jsx'
import WC3UI from './components/wc3ui.jsx'
import './css/video.css'
function PeonComponent() {

  // const audioRef = useRef(null);
  // callback hook to pass to canvas
  let peons;

  let debugMode = false;
  const width = window.innerWidth;
  const height = 250;
  const draw = context => {
    if (!peons) {
      peons = [];
      console.log('pushing new peon')
      peons.push(new Peon(context, debugMode));


      setInterval(() => {
        context.clearRect(0, 0, width, height)
        context.font = "48px serif";

        context.textAlign = 'center';
        context.strokeStyle = "Crimson"

        //context.fillText="black"
        const gratz = "GGWP, man!"
        context.strokeText(gratz, width / 2 - context.measureText(gratz).width / 4, height - 50);
        context.textAlign = 'center';
        context.fillText(gratz, width / 2 - context.measureText(gratz).width / 4, height - 50);
        peons.forEach(peon => {
          peon.update();

        });
      }, 100)

      console.log(`current peon count: ${peons.length}`);
    }


  };


  function handleCanvasClick(e) {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    peons.find(peon => {
      peon.isLoaded() ? peon.checkClicked(x, y) : -1;
      peon.setActive(true);
      peon.setDebugMode(debugMode);
    })
  }

  const onKeyDown = (ev) => {
    ev.preventDefault();
    if (ev.key == 'd') debugMode = !debugMode;
  }

  return (
    <div className='container flex justify-center w-full' tabIndex={0} onKeyDown={ (ev)=>{ onKeyDown(ev)} }>


      <WC3UI> </WC3UI>
      <VideoBackground ></VideoBackground>

      <Canvas handleClick={handleCanvasClick} draw={draw} height={height} width={width} on />


    </div>
  )
}

export default PeonComponent
