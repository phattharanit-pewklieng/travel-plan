import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, createContext, useReducer } from "react";

export interface TypeInitialState {
  budget: number;
  expenses: {
    id: number;
    name: string;
    cost: number;
  }[];
}


const AppReducer = (state:TypeInitialState, action:any) => {
	switch (action.type) {
    case 'ADD_EXPENSE':
      return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
      case 'DELETE_EXPENSE':
        return{
          ...state, 
          expenses: state.expenses.filter(
            (expense) => expense.id !== action.payload
          )
        }

		default:
			return state;
	}
};

const initialState: TypeInitialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
    { id: 14, name: 'car service', cost: 50 },
  ],
};

export const AppContext = createContext<any>(null);

export const AppProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};