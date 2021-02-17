const CurrencyContext = React.createContext(null);
class CurrencyProvider extends React.Component {

    updateUsername = newUsername => {
        this.setState({ username: newUsername });
      };
    



    state = {
        US: { currency: 'USD', tz: 'EST' },
        PK: { currency: 'PKR', tz: 'ISB' }
    }

    render() {

        return (

            <CurrencyContext.Provider value={this.state} >
            {this.props.children}
            </CurrencyContext.Provider>

        );
    }

}

const CurrencyConsumer = CurrencyContext.Consumer;

export {CurrencyConsumer, CurrencyProvider};