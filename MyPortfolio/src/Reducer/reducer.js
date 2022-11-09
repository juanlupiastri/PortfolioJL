import initialState from "../store/initialState";

let reducer = (state = initialState, action) =>{
    // console.log(state, action);
   

     switch(action.type){
       case "AGREGAR_USUARIO":
         console.log("se va a guardar en el store: "+ action.payload);
         return {...state, usuario:action.payload};
        
         case "CARGAR_ENTRENAMIENTO_STATE":
           // console.log("se va a guardar en el store: "+ action.payload);
            return {...state, entrenamientos:action.payload};

        case "CARGAR_TIPOSENTRENAMIENTO_STATE":
            return {...state, tiposEntrenamiento:action.payload};
        
        case "LOGUEAR":
            return { ...state, logged: true };
        
        case "DELETE_TRAINNING":
            let listaNuevaEntrenamientos=state.entrenamientos.filter(e=> e.id!==action.payload);
            return { ...state, entrenamientos:listaNuevaEntrenamientos};
        case "ADD_ENTRENAMIENTO":
            // let entrenamientoNuevo=action.payload;
            return { ...state, entrenamientos:[...state.entrenamientos, action.payload]};
        case "LOGOUT":
            return { ...state, logged: false, usuario:{},
            entrenamientos:[],
            tiposEntrenamiento:[] };
        default:
           return state;
     }
     return state;
   }

   export default reducer;