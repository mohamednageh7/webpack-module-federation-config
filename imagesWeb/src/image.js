import Heading from './component/heading/heading.js'
import AddImage from './component/imageCom/image.js'

const heading = new Heading()
const image = new AddImage()
heading.render('image')
image.render()


// ** this is how to use seperate component
// import('HelloWorldApp/HelloWorldButton').then(HelloWorldButtonModule => {
//     const HelloWorldButton = HelloWorldButtonModule.default

//     const helloWorldButton = new HelloWorldButton()

//     helloWorldButton.render()
// })

