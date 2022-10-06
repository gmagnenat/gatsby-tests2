import React from 'react';
import Layout from './src/components/layout';

export function onRenderBody({ setHtmlAttributes }) {
	setHtmlAttributes({ lang: 'en' });
}

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
	return <Layout {...props}>{element}</Layout>;
}
