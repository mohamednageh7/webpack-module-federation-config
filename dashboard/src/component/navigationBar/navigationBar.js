import './style.scss'

class NavigationBar{
    render(navigationItems){
        const list = navigationItems.map(navigationItem => {
            return `
            <li>
            <a href="${navigationItem.url}">${navigationItem.title}</a></li>`
        })

        const ul = document.createElement('ul')
        ul.innerHTML = list.join('')
        ul.classList.add('navigation-bar')

        document.querySelector('body').appendChild(ul)
    }
}

export default NavigationBar