import React, { useState, useEffect } from "react";
import createState from "./flux.js";


export const AppContext = React.createContext(null);


const injectContext = (WrappedComponent) => {
    const StoreWrapper = (props) => {
        
        const [globalState, setGlobalState] = useState(
            createState({
                getStore: () => globalState.store,
                getActions: () => globalState.actions,
                setStore: (updatedStore) =>
                    setGlobalState({
                        store: Object.assign(globalState.store, updatedStore),
                        actions: { ...globalState.actions },
                    }),
            })
        );

       
        useEffect(() => {
            const initializeData = async () => {
                try {
                    await globalState.actions.fetchPeople();
                    await globalState.actions.fetchStarships();
                    await globalState.actions.fetchSpecies();
                    console.log("Initial data fetched successfully.");
                } catch (error) {
                    console.error("Error initializing data:", error);
                }
            };

            initializeData();
        }, [globalState.actions]);

        
        return (
            <AppContext.Provider value={globalState}>
                <WrappedComponent {...props} />
            </AppContext.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;



