import React from 'react'
import { connect } from 'react-redux'
import { addLastName } from '../actions'


const Test = ( props ) => {
  const { user } = props;
  const handleChangeName = (nombre) => {
    props.addLastName({ user:  nombre })
  }

  return (
    <div>
      <h1>Test redux: {user}</h1>
      <button onClick={() => handleChangeName('Maicol Felipe Duque Urrea')}>Add last Name</button>
      <button onClick={() => handleChangeName('Maicol Felipe')}>Only first Name</button>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  addLastName
}
export default connect(mapStateToProps, mapDispatchToProps )(Test);