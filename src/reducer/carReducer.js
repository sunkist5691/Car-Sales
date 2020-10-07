
export const initialState = {

   additionalPrice: 0,
   car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
   },

   additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
   ]

}

export const carReducer = (state = initialState, action) => { // if the state is 'undefined', then equals to 'initialState'

   // why state and initialState are same and becomes different when we click button add or remove?
   // state and initialState are pointing same object in beginning, 
   // but later when we click 'ADD' button, the newly created object will updated through carReducer as our 'new' state
   // which that state is now pointing to 'new' object instead initialState object.
   // That 'new' object will send it to 'props' to App component when using connect()(App) 

   switch(action.type){
      case 'ADD_FEATURE':
         const addItem = state.additionalFeatures.find( eachFeature => eachFeature.id === action.payload )
         return { 
            ...state, 
            additionalPrice: state.additionalPrice + addItem.price,
            car: { 
               ...state.car, 
               features: [ ...state.car.features, addItem],
            },
            // additionalPrice: state.additionalPrice + addItem.price
            additionalFeatures: state.additionalFeatures.filter( eachFeature => addItem.id !== eachFeature.id)
         }
         
         case 'REMOVE_FEATURE':
            const removeItem = state.car.features.find( (eachFeature) => eachFeature.id === action.payload )
         return {
            ...state,
            additionalPrice: state.additionalPrice - removeItem.price,
            car: { 
               ...state.car, 
               features: state.car.features.filter( (eachFeature) => eachFeature.id !== removeItem.id)
            },
            additionalFeatures: [ ...state.additionalFeatures, removeItem]
         }

      default:
         return state
   }


}