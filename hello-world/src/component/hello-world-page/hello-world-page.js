import HelloWorldButton from '../hello-world-button/hello-world-button.js'
import Heading from '../heading/heading.js'

class HelloWorldPage{
    render(){
        const heeloWorldButton = new HelloWorldButton()
        const heading = new Heading()
        heading.render('hello World')
        heeloWorldButton.render()
    }
    
}

export default HelloWorldPage
  
