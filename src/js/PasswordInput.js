class PasswordInput extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_Password: ''}; 

        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handlePasswordChange(event){
        const delivery_Password = event.target.value;
        this.setState( () => {
                return {
                    delivery_Password
                }
            }
        );

        const zip = this.state.delivery_Password;
    }

    render() {
        return (
            <div className="form-group">
                <p>{this.props.specialcode}</p>
                <input className="form-control" 
                       id="PasswordInput" 
                       onChange={this.handlePasswordChange}
                       placeholder="Password" 
                       type="input"
                       value={this.state.delivery_Password}  />
            </div>
        );
    };
}