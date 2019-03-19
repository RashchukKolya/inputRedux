export default function input(state='', action) {
  switch(action.type){
    case 'input':
    return action.inputData;
    default:
    return state;
  }
}