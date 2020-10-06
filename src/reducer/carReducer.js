
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

   switch(action.type){
      case 'ADD_FEATURE':
         const addItem = state.additionalFeatures.find( eachFeature => eachFeature.id === action.payload )
         return { 
            ...state, 
            car: { 
               ...state.car, 
               price: state.car.price + addItem.price,
               features: [ ...state.car.features, addItem],
            },
            // additionalPrice: state.additionalPrice + addItem.price
         }

      case 'REMOVE_FEATURE':
         const removeItem = state.additionalFeatures.find( (eachFeature) => eachFeature.id === action.payload )
         return {
            ...state,
            car: { 
               ...state.car, 
               price: state.car.price - removeItem.price,
               features: state.car.features.filter( (eachFeature) => eachFeature.id !== removeItem.id)
            },
            // additionalPrice: state.additionalPrice - removeItem.price
         }

      default:
         return state
   }


}