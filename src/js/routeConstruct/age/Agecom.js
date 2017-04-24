import React from 'react';

 class Agecom extends React.Component {
 	constructor(props){
    	super(props);
    	this.state = {
      		value: null,
    	};
  	}
  	render() {
    	return <div className='rightCon'>
    		  27岁
    	</div>;
  	}
}

module.exports = Agecom;  