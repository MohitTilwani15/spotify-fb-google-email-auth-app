import React from 'react';
import graphql from 'graphql';

export default [{
  path: '/',
  components: () => [import('../../components/Layout'), import('./HomePage')],
  query: graphql`
		query HomePageQuery {
			...Layout
		}
	`,
  render: ([Layout, HomePage], data) => ({
    title: 'Mplatform | Home',
    component: (
			<Layout data={data}>
				<HomePage />
			</Layout>
		),
    chunks: ['Home'], 
  }),
}]
