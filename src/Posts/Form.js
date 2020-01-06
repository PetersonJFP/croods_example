import React, { useState } from 'react'

export default ({ info = {}, save, saving, saveError }) => {
  const [title, setTitle] = useState(info.title || '')
  const [body, setBody] = useState(info.body || '')

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Novo Post</h1>
      <p>
        Titulo{' '}
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </p>
      <p>
        Corpo{' '}
        <textarea
          cols="30"
          rows="10"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </p>
      {saving ? (
        <div>Salvando...</div>
      ) : (
        <div style={styles.button} onClick={() => save({ title, body })}>
          Salvar
        </div>
      )}
      {!!saveError && (
        <div style={styles.error}>
          Aconteceu um erro! <br />
          {saveError}
        </div>
      )}
    </div>
  )
}

const styles = {
  button: {
    width: '60px',
    padding: '10px',
    backgroundColor: 'green',
    border: '1px solid black',
    cursor: 'pointer',
    borderRadius: '10px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
  error: {
    backgroundColor: 'red',
    color: 'white',
  },
}
