import React from 'react';

 class Sexcom extends React.Component {
 	constructor(props){
    	super(props);
    	this.state = {
      		value: null,
    	};
  	}
  	render() {
    	return <div className='rightCon'>
    		  性别男
    	</div>;
  	}
}

module.exports = Sexcom;  