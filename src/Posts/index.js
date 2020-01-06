import React from 'react'
import { Fetch } from 'croods'
import { Link } from '@reach/router'
import { Info } from './Info'

export default () => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <h1 style={{ textAlign: 'center' }}>Posts</h1>
      <p style={{ textAlign: 'center' }}>
        <Link to={`/posts/create`}>Criar Novo</Link>
      </p>
      <Fetch
        name="posts"
        renderLoading={() => <div>Carregando...</div>}
        renderEmpty={() => <div>Não há posts para exibir</div>}
        render={Posts}
      />
    </div>
  )
}

const Posts = posts => (
  <div style={styles.postsContainer}>{posts.map(Info)}</div>
)

const styles = {
  postsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
}
