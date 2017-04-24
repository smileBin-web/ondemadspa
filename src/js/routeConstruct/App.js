 import React from 'react';
 import SliderBar from './sliderBar.js';
 import {withRouter} from 'react-router';

 class MyComponent extends React.Component {
 	  constructor(props){
    	super(props);
    	this.state = {
      		value: null,
    	};
  	}
    componentDidMount(){
      console.log(2);
      let router = this.props.router;
      if(this.props.location.pathname!='/sex'){
         router.push({pathname: '/sex'});
      }
    }
    _alert(){
      console.log(1);
    }
  	render() {
  		let children = this.props.children ? React.cloneElement(this.props.children,{}) :null;
    	return <div className='desc-lev1'>
    		<header className='Welcome' onTouchEnd={this._alert}>欢迎来到简里</header>
    		<div className='bot'>
    			<SliderBar />
    			{children}
    		</div>
    	</div>;
  	}
} ;

const Welcome = withRouter(MyComponent);

export default Welcome;  