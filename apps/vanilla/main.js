import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { setupReadDataJson } from './read-data-json.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vanilla!</h1>
    <div class="card">
      <a href="../" class="button">Index</a>
      <button id="counter" type="button"></button>
      <button id="read-data-json" type="button">Read Data JSON</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p class="read-the-docs">
      Click on the Index button to navigate to Index page
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
setupReadDataJson(document.querySelector('#read-data-json'))
