// action create is a function that 'creates' actions!
// aka a function that returns an action object

// action creator
export const addFeature = (itemId) => {

   // return object is a 'action'
   return { type: 'ADD_FEATURE', payload: itemId }
}

export const removeFeature = (itemId) => {

   return { type: 'REMOVE_FEATURE', payload: itemId }
}