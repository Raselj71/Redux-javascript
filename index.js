
const{createStore, combineReducers}=require('redux');

const ADD_DATA='ADD_DATA';
const ADD_CART='ADD_CART'

const intitalCartState={
           count:1,
           data:['coconut'],
};
const cartReducer=(state=intitalCartState, action)=>{
          switch(action.type){
            case ADD_CART:{
                return{
                   count:state.count+1,
                   data:[...state.data,action.payload],
                }
            }
            default:{
                return{
                    state
                }
            }
          }
         
};
const additemtocart=(item)=>{
      return{
        type:ADD_CART,
        payload:item,
      }
};


const inittialState={
    count:2,
    data:['Rasel', 'sumona'],
};

const reducer=(state=inittialState , action)=>{
    switch(action.type){
         case ADD_DATA:{
            return{
                ...state,
                count:state.count+1,
                data:[...state.data,action.payload],

            }
            
         }
        
         default:{
            return state
         }
    }

};

const addItem=(item)=>{
    return{
        type:ADD_DATA,
        payload:item,
    }

};
const rootReducer=combineReducers({
    productR:reducer,
    cartR:cartReducer
});

const store=createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch(additemtocart('habib'));
store.dispatch(addItem('somaiya'));


