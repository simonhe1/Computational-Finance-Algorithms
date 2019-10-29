import React, { Component } from 'react';
class TreasuryZeroRate extends Component {
    constructor(props){
        super(props);
        this.state = {
            A: 100,
            coupon: 0,
            e: Math.E,
            R: 0.00,
            n: 1,
            size: 0,
            frequency: 1,
            zeroRates: [],
            bondTable: [],
        };
        this.style = {
            width: '50%',
        };
    }

    updateBaseValue(A){this.setState({A});}
    updateInterestRate(R){
        R /= 100;
        this.setState({R});
    }
    updateYears(n){this.setState({n});}
    updateFrequency(frequency){this.setState({frequency})}

    updateZeroRates(input){
        console.log(5.4/100);
        input = input.trim();
        input = input.split(',');
        input = input.map(rate => rate/=100);
        console.log(input);
        this.setState({zeroRates: input});
    }

    updateSize(newSize){
        let tab = [];
        let year = 0.0;
        for(let i=0;i<newSize;i++){
            year+= this.state.n/newSize;
            tab.push({
                maturity: year,
                zeroRate: this.state.zeroRates[i],
            });
            // console.log(tab[i]);
        }
        console.log('tab',tab);
        let coup = this.state.A * this.state.R / this.state.frequency;
        this.setState({
            size: newSize,
            bondTable: tab,
            coupon: coup,
        });
    }

    makeTable(){
        const { bondTable } = this.state;
        let tab = [];
        console.log(bondTable);
        for(let i=0;i<bondTable.length;i++){
            tab.push(
                <tr key={i}>
                    <td>
                        {bondTable[i].maturity}
                    </td>
                    <td>
                        {bondTable[i].zeroRate}
                    </td>
                </tr>
            )
        }
        return (
            <tbody>
                {tab}
            </tbody>
        );        
    }

    calculateFutureValue(){
        const { A, e, bondTable , coupon , size } = this.state;
        console.log(' ');
        console.log(' ');
        console.log('A',A);
        console.log('e',e);
        console.log('Table',bondTable);
        console.log('Coupon',coupon);
        console.log('size',size);
        let ans = 0;
        if(bondTable.length > 0){            
            for(let i=0;i<bondTable.length-1;i++){
                ans += coupon*e**(-bondTable[i].zeroRate * bondTable[i].maturity);
            }
            ans += (coupon+A)*e**(-bondTable[bondTable.length-1].zeroRate * bondTable[bondTable.length-1].maturity);
        }else{
            ans = (
                <span>No Values</span>
            );
        }
        return(
            <div>
                {ans}
            </div>
        );
    }

    render() { 
        return (
            <React.Fragment>
                <h1 className="text-center">Zero Rates</h1>
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
                    Frequency&nbsp;
                    <input
                        type="number"
                        placeholder="Annual = 1, Semi = 2, Quarterly = 4, etc..."
                        style={this.style}
                        onChange={e => this.updateFrequency(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    Zero Rates&nbsp;
                    <input
                        type="text"
                        placeholder="put in zero rates separated by a comma ex. 2, 2.5, 7.0, etc.."
                        style={this.style}
                        onChange={e => this.updateZeroRates(e.target.value)}
                    />
                </div>
                <div>
                    e = Euler's Number ~2.71828&nbsp;
                </div>
                <div>
                    Size of Table&nbsp;
                    <input 
                        type="number"
                        placeholder="Enter the amount of rows for your table"
                        onChange={e => this.updateSize(parseInt(e.target.value))}
                    />
                </div>
                <table className="table table-bordered">
                    {this.makeTable()}
                </table>
                {this.calculateFutureValue()}
            </React.Fragment>
        );
    }
}
 
export default TreasuryZeroRate;