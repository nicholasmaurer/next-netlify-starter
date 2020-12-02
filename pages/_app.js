import '@styles/globals.css'
import 'react-notion-x/src/styles.css' // core styles shared by all of react-notion-x (required)
import 'prismjs/themes/prism-tomorrow.css' // used for code syntax highlighting (optional)
import 'rc-dropdown/assets/index.css' // used for collection views (optional)
import 'katex/dist/katex.min.css' // used for rendering equations (optional)

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
