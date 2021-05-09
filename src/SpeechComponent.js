import React, { useState, useEffect } from "react";
import './App.css';

const SpeechComponent = () => {
    const [textContent, setTextContent] = useState(
        "A hare was very popular with the other beasts who all claimed to be her friends. But one day she heard the hounds approaching and hoped to escape them by the aid of her many friends. So she went to the horse, and asked him to carry her away from the hounds on his back. But he declined, stating that he had important work to do for his master. “He felt sure,” he said, “that all her other friends would come to her assistance.” She then applied to the bull, and hoped that he would repel the hounds with his horns. The bull replied: “I am very sorry, but I have an appointment with a lady; but I feel sure that our friend the goat will do what you want. The goat, however, feared that his back might do her some harm if he took her upon it. The ram, he felt sure, was the proper friend to apply to. So she went to the ram and told him the case."
    )
    const [status, setStatus] = useState('NA')

    useEffect(() => {
        if ("speechSynthesis" in window) {
            console.log("Support Speech Synthesis")
        } else {
            setTextContent("Speech Synthesis is Not Supported.");
        }
    });

    const onClickPlay = () => {
        if (status === 'NA') {
            let utterance = new SpeechSynthesisUtterance(textContent);
            utterance.voice = window.speechSynthesis.getVoices()[1];
            utterance.voiceURL = 'native';
            utterance.pitch = 1;
            utterance.rate = 1.5;
            utterance.volume = 0.8;

            utterance.onend = () => {
                console.log("END");
                setStatus('NA');
            };

            window.speechSynthesis.speak(utterance);
            setStatus('Speaking');
            console.log("START");
        }
    };
    const onClickPause = () => {
        if (status !== 'NA') {
            if (status !== 'Paused') {
                window.speechSynthesis.pause();
                console.log("PAUSE");
                setStatus('Paused');
            } else
                if (status === 'Paused') {
                    window.speechSynthesis.resume();
                    console.log("RESUME");
                    setStatus('Resume');
                }
        }
    };
    const onClickStop = () => {
        if (status !== 'NA') {
            window.speechSynthesis.cancel();
            setStatus('Stop');
            console.log("STOP");
        }
    };

    return (
        <div>
            <h3>Example Speech Synthesis Utterance</h3>
            <button className='play'
                onClick={() => onClickPlay()}>
                Play
                </button>
            <button className='pause'
                onClick={() => onClickPause()}>
                Pause
                </button>
            <button className='stop'
                onClick={() => onClickStop()}>
                Stop
                </button>

            <h4>Status = {status}</h4>

            <div>
                <textarea
                    className='content'
                    onChange={(e) => setTextContent(e.target.value)}
                    value={textContent} />
            </div>
        </div>
    );
}

export default SpeechComponent;
