import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg?url'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Index</h1>
    <div class="card">
      <a href="./react/" class="button">React</a>
      <a href="./vanilla/" class="button">Vanilla</a>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p class="read-the-docs">
      Click on the link button to navigate to the other apps
    </p>
  </div>
`
