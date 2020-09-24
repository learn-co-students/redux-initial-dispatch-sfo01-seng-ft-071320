// let state = {count: 0};
let state;


function changeState(state = { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

render();
//here we dispatch an acton of '@@INIT'. This calls the dispatch() function
//and passes through the initial action.
dispatch({ type: '@@INIT' });