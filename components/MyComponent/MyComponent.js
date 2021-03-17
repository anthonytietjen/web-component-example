class MyComponent extends HTMLElement {
    buttonIter = 0;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })

        // Create the div
        const theDiv = document.createElement('div')
        theDiv.className = "the-div"
        theDiv.innerHTML = this.getAttribute('data-text')

        // Add a button
        const theButton = document.createElement('my-button');
        theButton.setAttribute("data-text", "Click Me")
        theButton.addEventListener('click', () => {
            console.log('clicked')
            this.buttonIter = this.buttonIter + 1
            theButton.setAttribute('data-text', `Clicked amount: ${this.buttonIter}`)
        })
        theDiv.append(theButton);

        // Attach elements to the shadow dom
        this.shadowRoot.append(theDiv)

        // Attach css to shadown dom
        const linkElement = document.createElement('link')
        linkElement.setAttribute('rel', 'stylesheet')
        linkElement.setAttribute('href', 'components/MyComponent/MyComponent.css')
        this.shadowRoot.append(linkElement)
    }

    connectedCallback(){
        console.log('MyComponent: connectedCallback')
    }
}

customElements.define('my-component', MyComponent)
