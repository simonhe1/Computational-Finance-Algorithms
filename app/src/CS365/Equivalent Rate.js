import React, { Component } from 'react';
class EquivalentRate extends Component {
    constructor(props){
        super(props);
        this.state = {
            m: 1,
            Rc: 0.00,
            e: Math.E
        };
        this.style = {
            width: '50%',
        }
    }
    
    updateInterestRate(Rc){
        Rc /= 100;
        this.setState({Rc});
    }

    updateFrequency(m){this.setState({m});}

    calculateFutureValue(){
        const { Rc, m, e } = this.state;
        console.log(2 * Math.log(1 + (Rc/m)));
        return(
            <div>
                {100 * (m * (e**(Rc/m)-1))}%
            </div>
        );
    }

    render() { 
        return (
            <React.Fragment>
                <h1 className="text-center">Equivalent Rate</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    Equation: m(e<sup><sup>R<sub>c</sub>&frasl;<sub>m</sub>+1</sup></sup>)
                </div>
                <div>
                    Rc = Equivalent Rate&nbsp;
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
                <div>
                    e = Euler's Number ~2.71828&nbsp;
                </div>
                    {this.calculateFutureValue()}
            </React.Fragment>
        );
    }
}
 
export default EquivalentRate;