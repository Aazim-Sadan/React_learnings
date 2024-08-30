
// Define a function called customRender that takes two arguments: 
// reactElement (an object that represents a React element) 
// and container (a DOM element where the React element will be rendered)

function customRender(reactElement, container) {
    // let domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)


    // using for in loop

    let domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)

}


// creating tree graph of elements 
let reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_target'
    },
    children: 'Click me to visit Google'

}


let mainContainer = document.querySelector('#root')

// Call the customRender function, passing in the reactElement and mainContainer
customRender(reactElement, mainContainer)