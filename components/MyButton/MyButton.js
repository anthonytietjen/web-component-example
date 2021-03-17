class MyButton extends HTMLElement {
    button;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })

        // Create the UI
        this.button = document.createElement('button')

        // Attach elements to the shadow dom
        this.shadowRoot.append(this.button)

        // Attach css to shadown dom
        const linkElement = document.createElement('link')
        linkElement.setAttribute('rel', 'stylesheet')
        linkElement.setAttribute('href', 'components/MyButton/MyButton.css')
        this.shadowRoot.append(linkElement)
    }

    connectedCallback(){
        console.log('MyButton: connectedCallback')
        this.button.className = "the-button"
        this.button.innerText = this.getAttribute('data-text')
    }

    // TODO: Figure out why this isn't being called
    attributeChangedCallback(name, oldValue, newValue){
        console.log('MyButton: attributeChangedCallback')
    }
}

customElements.define('my-button', MyButton)
