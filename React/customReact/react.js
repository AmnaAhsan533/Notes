function customRender(reactElement, conatiner){
    /*
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.children
    domEle.setAttribute('href', reactElement.props.href)
    domEle.setAttribute('target', reactElement.props.target)

    conatiner.appendChild(domEle)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    conatiner.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)