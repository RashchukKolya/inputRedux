export default  function text(state='',action){
  switch (action.type) {
  case 'change':
  return {...state, [action.payload.name]:action.payload.value}
  default:
  return state;
}
}