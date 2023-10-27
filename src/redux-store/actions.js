const setText = (text) => {
  return(dispatch) => {
    dispatch({
      type: 'TEXT',
      text:text
    })
  }
}

export {
  setText
}
