class AppComponent extends React.Component 
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className = "container">
                <EmailInput />
                <PasswordInput />
            </div>
        );
    };

}
var root = document.getElementById('root');
ReactDOM.render(<AppComponent />, root);