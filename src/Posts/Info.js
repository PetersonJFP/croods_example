import React from 'react'
import { Fetch } from 'croods'
import { Link } from '@reach/router'

export default props => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <h1 style={{ textAlign: 'center' }}>Post</h1>
      <Fetch name="posts" id={props.id} render={Info} />
    </div>
  )
}

export const Info = post => (
  <div key={post.id} style={styles.post}>
    <p style={styles.title}>
      <b>{post.title}</b>
    </p>
    <p style={styles.body}>{post.body}</p>
    {!!post.id && <p>Id do post: {post.id}</p>}
    <p style={styles.linksWrapper}>
      <Link to={`/posts/${post.id}`} style={styles.link}>
        Ver
      </Link>
      <Link to={`/posts/${post.id}/edit`} style={styles.link}>
        Editar
      </Link>
      <Link to={`/posts/${post.id}/delete`} style={styles.link}>
        Excluir
      </Link>
    </p>
  </div>
)

const styles = {
  post: {
    display: 'block',
    width: '320px',
    padding: '15px',
    borderRadius: '5px',
    margin: '10px',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  title: {
    textAlign: 'center',
    fontSize: '18px',
    color: 'white',
    textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue',
  },
  body: { textAlign: 'justify' },
  linksWrapper: { textAlign: 'center', width: '100%' },
  link: {
    textDecoration: 'none',
    margin: '10px',
  },
}
