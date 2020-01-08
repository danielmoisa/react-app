import React from 'react';
import Header from './Header'
import Typography from '@material-ui/core/Typography';

export default function Features(){
	return(
		<React.Fragment>
			<Header />
			<Typography align="center" variant="h3" component="h4">Features</Typography>
		</React.Fragment>
	)
}