import React, { useState } from 'react'
import { useCroods } from 'croods'
import { Info } from './Info'
import Form from './Form'

export default () => {
  const [{ saving, saveError }, { save }] = useCroods({ name: 'posts' })
  const [createdPost, setCreatedPost] = useState(false)

  return (
    <div style={styles.postsContainer}>
      {createdPost ? (
        <div>
          <h1>Salvo com sucesso!</h1>
          <h2>Post recem criado</h2>
          <Info {...createdPost} />
        </div>
      ) : (
        <Form
          save={save({
            afterSuccess: response => setCreatedPost(response.data),
          })}
          saving={saving}
          saveError={saveError}
        />
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
  postsContainer: {
    display: 'flex',
    flexDirection: 'collumn',
    alignContent: 'center',
    justifyContent: 'center',
  },
}
