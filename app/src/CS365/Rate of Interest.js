import React, { Component } from 'react';
class RateOfInterest extends Component {
    constructor(props){
        super(props);
        this.state = {
            m: 1,
            Rm: 0.00,
        };
        this.style = {
            width: '50%',
        }
    }
    
    updateInterestRate(Rm){
        Rm /= 100;
        this.setState({Rm});
    }

    updateFrequency(m){this.setState({m});}

    calculateFutureValue(){
        const { Rm, m } = this.state;
        console.log('Rm',Rm);
        console.log('Frequency', m);
        console.log(2 * Math.log(1 + (Rm/m)));
        return(
            <div>
                {100 * (2 * Math.log(1 + (Rm/m)))}%
            </div>
        );
    }

    render() { 
        return (
            <React.Fragment>
                <h1 className="text-center">Rate Of Interest</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    Equation: m * ln(1 + <sup>R<sub>m</sub></sup>&frasl;<sub>m</sub>)
                </div>
                <div>
                    Rm = Equivalent Rate&nbsp;
                    <input
                        type="number"
                        placeholder="Write your answer in %!"
                        style={this.style}
                        onChange={e => this.updateInterestRate(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    m = Frequency&nbsp;
                    <input
                        type="number"
                        placeholder="default value is daily which m = 365"
                        style={this.style}
                        onChange={e => this.updateFrequency(parseFloat(e.target.value))}
                    />
                </div>
                    {this.calculateFutureValue()}
            </React.Fragment>
        );
    }
}
 
export default RateOfInterest;