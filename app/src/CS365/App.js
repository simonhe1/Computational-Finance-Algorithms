import React, { Component } from 'react';
import CompoundingFrequency from './Compounding Frequency';
import ContinuousCompounding from './Continuous Compunding';
import DiscountingCC from './Discount Continuous Compounding';
import RateOfInterest from './Rate of Interest';
import EquivalentRate from './Equivalent Rate';
import ZeroRates from './Zero Rates';
import TreasuryZeroRate from './Treasury Zero Rate';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: -1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(num){
    this.setState({index: num});
  }

  handlePage(){
    switch(this.state.index){
      case 0:
        return <CompoundingFrequency goBack={this.handleClick}/>
      case 1:
        return <ContinuousCompounding goBack={this.handleClick}/>
      case 2: 
        return <DiscountingCC goBack={this.handleClick}/>
      case 3:
        return <RateOfInterest goBack={this.handleClick}/>
      case 4:
        return <EquivalentRate goBack={this.handleClick}/>
      case 5: 
        return <ZeroRates goBack={this.handleClick}/>
      case 6:
        return <TreasuryZeroRate goBack={this.handleClick}/>
      // case 7:
      //   return <LUDecomposition goBack={this.handleClick}/>
      // case 8:
      //   return <Lagrange goBack={this.handleClick}/>
      default:
        return(
          <div>
          <div className="text-center"><h1>Sateesh CS 365</h1></div>
          <div className="text-center" onClick={e => this.handleClick(0)}>Compounding Frequency</div>
          <div className="text-center" onClick={e => this.handleClick(1)}>Continuous Compounding</div>
          <div className="text-center" onClick={e => this.handleClick(2)}>Discounting Continuous Compounding</div>        
          <div className="text-center" onClick={e => this.handleClick(3)}>R<sub>c</sub> :Rate of Interest with Continuous Compounding</div>
          <div className="text-center" onClick={e => this.handleClick(4)}>R<sub>m</sub> :Equivalent Rate with Compounding m times per annum</div>
          <div className="text-center" onClick={e => this.handleClick(5)}>Zero Rates</div>
          <div className="text-center" onClick={e => this.handleClick(6)}>Treasury Zero Rates</div>
          <div className="text-center">LU Decomposition Method Algorithm</div>
          <div className="text-center">Lagrange's Interpolation Algorithm</div>
          <div className="text-center">Back Substitution Algorithm</div>
          <div className="text-center">Scaled Pivots Algorithm</div>
        </div>
        );
    }
  }

  render() {
    return this.handlePage();
  }
}
 
export default App;