import HelloWorldButton from './component/hello-world-button/hello-world-button.js'
import Heading from './component/heading/heading.js'

const heeloWorldButton = new HelloWorldButton()
const heading = new Heading()
heading.render('hello World')
heeloWorldButton.render()

if(process.env.NODE_ENV === 'production'){
    console.log('Production mode')
} else if(process.env.NODE_ENV === 'development'){
    console.log('Development mode')
}
  
