import React from 'react';
import Layout from './src/components/layout';

export function wrapPageElement({ props, element }) {
	return <Layout {...props}>{element}</Layout>;
}
