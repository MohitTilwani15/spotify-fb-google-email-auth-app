import React from 'react';
import graphql from 'graphql';

export default[{
  path: '/spotify',
  components: () => [import('../../components/Layout'), import('./SpotifyPage')],
  query: graphql`
		query SpotifyPageQuery {
			...Layout
      ...SpotifyPage
		}
	`,
  render: ([Layout, SpotifyPage], data) => ({
    title: 'Mplatform | Spotify',
    component: (
			<Layout data={data}>
				<SpotifyPage data={data} />
			</Layout>
		),
    chunks: ['Spotify'], 
  }),
}]
