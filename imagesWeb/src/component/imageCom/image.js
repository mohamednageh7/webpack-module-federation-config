import Mohamed from './1.jpg';
import './style.scss'

class AddImage {
  render() {
    const img = document.createElement('img');
    img.alt = 'Mohamed';
    img.src = Mohamed;
    img.classList.add('com-image')
    const body = document.querySelector('body');

    body.appendChild(img);
  }
}

export default AddImage;
