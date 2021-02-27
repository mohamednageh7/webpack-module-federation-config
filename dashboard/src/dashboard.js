import NavigationBar from './component/navigationBar/navigationBar.js'

const navigationItems = [
  {
    url:'/hello-world-page',
    title:'Hello World'
  },
  {
    url:'/image-page',
    title:'Image World'
  },
]

const navigationBar = new NavigationBar()
navigationBar.render(navigationItems)

const url = window.location.pathname;
console.log('url',url)
if (url === '/hello-world-page') {
  import('HelloWorldApp/HelloWorldPage').then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;

    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === '/image-page') {
  import('ImageApp/imagePage').then((ImageApModule) => {
    const ImagePage = ImageApModule.default;

    const imagePage = new ImagePage();
    imagePage.render();
  });
}

console.log('dashboard');
