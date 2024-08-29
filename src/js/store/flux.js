const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            favorites: []
        },
        actions: {
            loadPeople: async () => {
                const response = await fetch("https://www.swapi.tech/api/people");
                const data = await response.json();
                setStore({ people: data.results });
            },
            loadPlanets: async () => {
                const response = await fetch("https://www.swapi.tech/api/planets");
                const data = await response.json();
                setStore({ planets: data.results });
            },
            loadVehicles: async () => {
                const response = await fetch("https://www.swapi.tech/api/vehicles");
                const data = await response.json();
                setStore({ vehicles: data.results });
            },
            addFavorite: item => {
                const store = getStore();
                if (!store.favorites.includes(item)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },
            removeFavorite: item => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav !== item) });
            }
        }
    };
};

export default getState;
