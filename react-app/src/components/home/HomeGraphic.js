import styled from "styled-components"
import butterchurn from 'butterchurn'
import butterchurnPresets from 'butterchurn-presets'

const HomeGraphicContainer = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        display: flex;
    }
`

const HomeGraphic = () => {
    // const canvas = document.querySelector("#canvas")
    // const audioContext = new AudioContext();

    // const sourceNode = audioContext.createBufferSource();

    // const visualizer = butterchurn.createVisualizer(audioContext, canvas, {
    //     width: 800,
    //     height: 600
    // });

    // visualizer.connectAudio(sourceNode);

    // const presets = butterchurnPresets.getPresets();
    // const preset = presets['Flexi, martin + geiss - dedicated to the sherwin maxawow'];

    // visualizer.loadPreset(preset, 0.0);

    // visualizer.setRendererSize(1600, 1200);

    return(
        <HomeGraphicContainer>
            {/* <div id="canvas">{visualizer.render()}</div> */}
            {/* <img src="https://cdn.discordapp.com/attachments/858135958729392152/933960845942222868/KdV41W.jpg"></img> */}
        </HomeGraphicContainer>
    )
}

export default HomeGraphic
