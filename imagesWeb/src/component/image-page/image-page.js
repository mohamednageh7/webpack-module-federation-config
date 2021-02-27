import Heading from '../heading/heading.js'
import AddImage from '../imageCom/image.js'

class ImagePage{
    render(){
        const heading = new Heading()
        const image = new AddImage()
        heading.render('image')
        image.render()
    }
}

export default ImagePage
