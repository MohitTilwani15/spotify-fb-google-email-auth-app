import React from 'react';
import graphql from 'graphql';

export default[{
  path: '/itunes',
  components: () => [import('../../components/Layout'), import('./ItunesPage')],
  query: graphql`
		query ItunesPageQuery {
			...Layout
		}
	`,
  render: ([Layout, ItunesPage], data) => ({
    title: 'Mplatform | Itunes',
    component: (
			<Layout data={data}>
				<ItunesPage />
			</Layout>
		),
    chunks: ['Itunes'], 
  }),
}]
