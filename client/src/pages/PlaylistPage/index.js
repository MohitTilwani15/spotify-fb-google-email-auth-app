import React from 'react';
import graphql from 'graphql';

export default [{
  path: '/playlist',
  components: () => [import('../../components/Layout'), import('./PlaylistPage')],
  query: graphql`
		query PlaylistPageQuery {
			...Layout
		}
	`,
  render: ([Layout, PlaylistPage], data) => ({
    title: 'Mplatform | Playlist',
    component: (
			<Layout data={data}>
				<PlaylistPage />
			</Layout>
		),
    chunks: ['Playlist'], 
  }),
}]
