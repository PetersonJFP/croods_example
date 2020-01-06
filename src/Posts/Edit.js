import React, { useState } from 'react'
import { Fetch } from 'croods'
import { Info } from './Info'
import Form from './Form'

export default ({ id }) => (
  <Fetch
    id={id}
    name="posts"
    render={(info, [{ saving, saveError }, { save }]) => (
      <Edit info={info} save={save} saving={saving} saveError={saveError} />
    )}
  />
)

export const Edit = ({ save, saving, saveError, info, ...props }) => {
  const [createdPost, setCreatedPost] = useState(false)

  return (
    <div style={styles.postsContainer}>
      {createdPost ? (
        <div>
          <h1>Salvo com sucesso!!</h1>
          <h2>Post recem editado</h2>
          <Info {...createdPost} />
        </div>
      ) : (
        <Form
          info={info}
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
    padding: '20px',
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
