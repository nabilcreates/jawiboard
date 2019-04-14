class App extends React.Component{

    constructor(){
        super();

        this.state = {
            letters:['ا','ب','ت','ث','ج','چ','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ڠ','ف','ڤ','ق','ک','ݢ','ل','م','ن','و','ۏ','ه','ة','ء','ي','ڽ','ى', 'Space'],
            value: '',
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        let letter = e.target.innerText
        console.log(letter)
        switch(letter){
            case 'Space':
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
    
    render(){
        return(
            <div>

                <input id='arab_input' value={this.state.value} ></input>
                
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