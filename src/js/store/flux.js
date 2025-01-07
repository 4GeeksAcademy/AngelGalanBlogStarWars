const createState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            peopleList: [],
            starshipList: [],
            speciesList: [],
            selectedPerson: null,
            selectedSpecies: null,
            selectedStarship: null,
            favorites: []
        },
        actions: {
            
            fetchPeople: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people/");
                    const data = await response.json();
                    setStore({ peopleList: data.results });
                } catch (error) {
                    console.error("Error fetching people:", error);
                }
            },

            
            fetchStarships: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/starships/");
                    const data = await response.json();
                    setStore({ starshipList: data.results });
                } catch (error) {
                    console.error("Error fetching starships:", error);
                }
            },

           
            fetchSpecies: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/species/");
                    const data = await response.json();
                    setStore({ speciesList: data.results });
                } catch (error) {
                    console.error("Error fetching species:", error);
                }
            },

            
            fetchPersonDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                    const data = await response.json();
                    setStore({ selectedPerson: data.result.properties });
                } catch (error) {
                    console.error("Error fetching person details:", error);
                }
            },

           
            fetchSpeciesDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/species/${id}`);
                    const data = await response.json();
                    setStore({ selectedSpecies: data.result.properties });
                } catch (error) {
                    console.error("Error fetching species details:", error);
                }
            },

            
            fetchStarshipDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
                    const data = await response.json();
                    setStore({ selectedStarship: data.result.properties });
                } catch (error) {
                    console.error("Error fetching starship details:", error);
                }
            },

           
            addToFavorites: (item) => {
                const store = getStore();
                if (!store.favorites.some((favorite) => favorite.uid === item.uid)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

           
            removeFromFavorites: (uid) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter((fav) => fav.uid !== uid);
                setStore({ favorites: updatedFavorites });
            }
        }
    };
};

export default createState;




 




