# Speech Synthesis Utterance
### [React JS (using Hooks)](https://reactjs.org/docs/hooks-intro.html, "React (Hooks)")

The SpeechSynthesis interface of the Web Speech API is the controller interface for the speech service.

---

**The code to start the speech synthesis :-**

```JavaScript
let utterance = new SpeechSynthesisUtterance("Hello World!");
utterance.voice = window.speechSynthesis.getVoices()[1];
utterance.voiceURL = 'native';
utterance.pitch = 1;
utterance.rate = 1.5;
utterance.volume = 0.8;
utterance.onend = () => {
    // todo
};
window.speechSynthesis.speak(utterance);
```

Use `new SpeechSynthesisUtterance("Hello World!")` to initialize the synthesis.

| Properties | Description |
| --- | --- |
| SpeechSynthesis.paused | A Boolean that returns true if the SpeechSynthesis object is in a paused state. |
| SpeechSynthesis.pending | A Boolean that returns true if the utterance queue contains as-yet-unspoken utterances. |
| SpeechSynthesis.speaking | A Boolean that returns true if an utterance is currently in the process of being spoken — even if SpeechSynthesis is in a paused state. |

---

| Methods | Description |
| --- | --- |
| SpeechSynthesis.speak() | Adds an utterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken. |
| SpeechSynthesis.getVoices() | get the list of available voice on the current system. |
| SpeechSynthesis.pause() | Puts the SpeechSynthesis object into a paused state. |
| SpeechSynthesis.resume() | Puts the SpeechSynthesis object into a non-paused state: resumes it if it was already paused. |
| SpeechSynthesis.cancel() | Removes all utterances from the utterance queue. |

---

**For more info check [SpeechSynthesis MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis, "Web technology for developers
Web APIs
SpeechSynthesis")**

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

