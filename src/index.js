import React from 'react';
import ReactDOM from 'react-dom/client';

class Ex1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Vasya', age: 25 };
    }

    render() {
        return (
            <div>
                Name: {this.state.name}, Age: {this.state.age}
            </div>
        );
    }
}

class Ex2 extends React.Component {
    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
    }

    showMessage() {
        alert('Hey');
    }

    render() {
        return (
            <div>
                <button onClick={this.showMessage}>Click</button>
            </div>
        );
    }
}

class Ex3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Stepan', age: 25 };
        this.showName = this.showName.bind(this);
    }

    showName() {
        alert(this.state.name);
    }

    render() {
        return (
            <div>
                <button onClick={this.showName}>Click</button>
            </div>
        );
    }
}

class Ex4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Stepan', age: 25 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ name: 'Valentanys', age: 30 });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
                <div>Name: {this.state.name}, Age: {this.state.age}</div>
            </div>
        );
    }
}

class Ex5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            name: "Drakyla",
        };
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show,
        });
    };

    render() {
        const greeting = this.state.show ? "Hey" : "Paka";
        return (
            <div>
                <p>{greeting}, {this.state.name}!</p>
                <button onClick={this.handleClick}>Change pruvitania</button>
            </div>
        );
    }
}

class Ex6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Vinnik', age: 25 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ name: 'Orel', age: 25 });

        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.name}, Age: {this.state.age}</p>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

class Ex7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Baba yaga", age: 25, isVisible: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible,
        }));
    }

    render() {
        return (
            <div>
                {this.state.isVisible && (
                    <p>Name: {this.state.name}, Age: {this.state.age}</p>
                )}
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

class Ex8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false,
            buttonText: 'Show'
        };
        this.toggleText = this.toggleText.bind(this);
    }

    toggleText() {
        const showText = !this.state.showText;
        const buttonText = showText ? 'Sxovatu' : 'Pokazatu';
        this.setState({ showText, buttonText });
    }

    render() {
        const { showText, buttonText } = this.state;
        return (
            <div>
                <button onClick={this.toggleText}>{buttonText}</button>
                {showText && <p>Name: Shoto, Age: 18</p>}
            </div>
        );
    }
}

class Ex9 extends React.Component {
    state = {
        names: ['Jojo', 'Eren', 'Mikasa'],
    }

    render() {
        return (
            <ul>
                {this.state.names.map(name => <li>{name}</li>)}
            </ul>
        );
    }
}

class Ex10 extends React.Component {
    state = {
        names: ['Erwin', 'Levi', 'Sasha'],
    }

    render() {
        return (
            <ul>
                {this.state.names.map((name, index) => (
                    <li>
                        {name} - {index + 1}
                    </li>
                ))}
            </ul>
        );
    }
}

class Ex11 extends React.Component {
    state = {
        hrefs: [
            { href: '1.html', text: 'link 1' },
            { href: '2.html', text: 'link 2' },
            { href: '3.html', text: 'link 3' },
        ]
    };

    render() {
        return (
            <ul>
                {this.state.hrefs.map((href, index) => (
                    <li key={index}>
                        <a href={href.href}>{href.text}</a>
                    </li>
                ))}
            </ul>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <p>Ex1</p>
        <Ex1 />
        
        <p>Ex2</p>
        <Ex2 />
        
        <p>Ex3</p>
        <Ex3 />
        
        <p>Ex4</p>
        <Ex4 />
        
        <p>Ex5</p>
        <Ex5 />
        
        <p>Ex6</p>
        <Ex6 />
        
        <p>Ex7</p>
        <Ex7 />

        <p>Ex8</p>
        <Ex8 />

        <p>Ex9</p>
        <Ex9 />

        <p>Ex10</p>
        <Ex10 />

        <p>Ex11</p>
        <Ex11 />
    </div>

);