class MyButton extends HTMLElement {
    static get observedAttributes() {
        return ['data-text']
    }

    button;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })

        // Create the UI
        this.button = document.createElement('button')
        this.button.className = "the-button"

        // Attach elements to the shadow dom
        this.shadowRoot.append(this.button)

        // Attach css to shadown dom
        const linkElement = document.createElement('link')
        linkElement.setAttribute('rel', 'stylesheet')
        linkElement.setAttribute('href', 'components/MyButton/MyButton.css')
        this.shadowRoot.append(linkElement)
    }

    connectedCallback() {
        console.log('MyButton: connectedCallback')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.button.innerText = this.getAttribute('data-text')
    }
}

customElements.define('my-button', MyButton)
