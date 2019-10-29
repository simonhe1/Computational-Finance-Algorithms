import React, { Component } from 'react';

class ContinuousCompounding extends Component {
    constructor(props){
        super(props);
        this.state = {
            A: 100,
            R: 0.00,
            n: 1,
            e: Math.E,
        };
    }

    updateBaseValue(A){this.setState({A});}
    updateInterestRate(R){
        R /= 100;
        this.setState({R});
    }
    updateYears(n){this.setState({n});}
    updateFrequency(m){this.setState({m});}

    calculateFutureValue(){
        const { A, R, n, e} = this.state;
        return(
            <div>
                {A*e**(R*n)}
            </div>
        );
    }

    render() { 
        return (
            <React.Fragment>
                <h1 className="text-center">Compounding Frequency</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    Equation: Ae<sup>R * n</sup>
                </div>
                <div>
                    A = Base value&nbsp;
                    <input 
                        type="number"
                        placeholder="default value is $100"
                        style={this.style}
                        onChange={e => this.updateBaseValue(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    R = Interest rate&nbsp;
                    <input
                        type="number"
                        placeholder="Write your answer in %!"
                        style={this.style}
                        onChange={e => this.updateInterestRate(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    n = Number of years&nbsp;
                    <input
                        type="number"
                        placeholder="default value is 1 year"
                        style={this.style}
                        onChange={e => this.updateYears(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    e = Euler's Number ~2.71828&nbsp;
                </div>  
                    {this.calculateFutureValue()}
            </React.Fragment>
        );
    }
}
 
export default ContinuousCompounding;