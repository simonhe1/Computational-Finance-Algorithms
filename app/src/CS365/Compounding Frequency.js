import React, { Component } from 'react';

class CompoundingFrequency extends Component {
    constructor(props){
        super(props);
        this.state = {
            A: 100,
            R: 0.00,
            n: 1,
            m: 365,
        };
        this.style = {
            width: '50%',
        }
    }

    updateBaseValue(A){this.setState({A});}
    updateInterestRate(R){
        R /= 100;
        this.setState({R});
    }
    updateYears(n){this.setState({n});}
    updateFrequency(m){this.setState({m});}

    calculateFutureValue(){
        const { A, R, n, m} = this.state;
        return(
            <div>
                {A*(1+R/m)**(m*n)}
            </div>
        );
    }

    render() { 
        return (
            <React.Fragment>
                <h1 className="text-center">Compounding Frequency</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    Equation: A(1+<sup>R</sup>&frasl;<sub>m</sub>)<sup>m * n</sup>
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
                    m = Compounding Frequency&nbsp;
                    <input
                        type="number"
                        placeholder="default value is daily so m=365"
                        style={this.style}
                        onChange={e => this.updateFrequency(parseFloat(e.target.value))}
                    />
                </div>  
                    {this.calculateFutureValue()}
            </React.Fragment>
        );
    }
}
 
export default CompoundingFrequency;