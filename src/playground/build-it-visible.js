// VisibilityToggle -render, constructor(bind)
// vvisibility -> false

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.onShowDetail = this.onShowDetail.bind(this);
        this.state = {
            detailText: "hahahaha",
            hideText: "",
            visibility: false,
            title: "Visibility Toggle",
            buttonText: "Show Details"
        };
    }
    onShowDetail(){

        if(this.state.visibility){this.setState({
            visibility: false,
            buttonText: "Show Details"
        })}
        else{
            this.setState({
                visibility: true,
                buttonText: "Hide Details"
            })
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.onShowDetail}>{this.state.buttonText}</button>
                <p>{this.state.visibility ? this.state.detailText : this.state.hideText}</p>
            </div>
        )
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*
const app = {
    title: 'Visibility Toggle',
    detailText: 'Hahahahaha',
    hideText: '',
    visibility: false,
    buttonText: "Show Details"
};

const buttonDesc = ["SHow Details", "Hide Details"]

const onShowDetail = () =>{
    if(app.visibility){
        app.buttonText = "Show details";
        app.visibility = false;

    }
    else{
        app.buttonText = "Hide details";
        app.visibility = true;

    }
    render();
}

//renderメソッドを定義
//表示するJSXのtemplateを動的に更新して、それをReactDOM.renderで再表示
const render = () => { 
    const template = (
        <div>
          <h1>{app.title}</h1>
            <button onClick={onShowDetail}>{app.buttonText}</button>
            <p>{app.visibility ? app.detailText : app.hideText}</p>
            </div>
      );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
render(); */