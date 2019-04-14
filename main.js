class App extends React.Component{

    constructor(){
        super();

        this.state = {
            letters:['ا','ب','ت','ث','ج','چ','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ڠ','ف','ڤ','ق','ک','ݢ','ل','م','ن','و','ۏ','ه','ة','ء','ي','ڽ','ى', '⌨','؟','؛','،ـ','٠','١','٢','٣','٤','٥','٦','٧','٨','٩','٬','٫',
            
        ],
            value: '',
        }

        this.handleClick = this.handleClick.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }

    handleClick(e){
        let letter = e.target.innerText
        console.log(letter)
        switch(letter){
            case '⌨':
                this.setState(prev => {
                    return{
                        value: prev.value.concat(' ')
                    }
                })
                break;

            default:
                this.setState(prev => {
                    return{
                        value: prev.value.concat(letter)
                    }
                })
        }
    }

    clearInput(){
        this.setState({
            value: '',
        })
    }
    
    render(){
        return(
            <div>

                <div id='top'>
                    <p id='clearButton' onClick={this.clearInput} >X</p>
                    <input id='arab_input' value={this.state.value} ></input>
                </div>
                
                <div id='buttons'>
                    {this.state.letters.map(letter => {
                    return <p onClick={this.handleClick} id='arab'>{letter}</p>})}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)