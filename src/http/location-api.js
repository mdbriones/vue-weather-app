import api from "./api";

const resource = "/location"

export const getForecasts = searchText => {
    const config = {
        params: searchText,
        headers: {
            'Accept': 'application/json',
        }
    };

    return api.get(`${resource}/forecasts`, config)
}

export const getLocationNearby = searchText => {
    const config = {
        params: searchText,
        headers: {
            'Accept': 'application/json',
        }
    };

    return api.get(`${resource}/nearbyPlaces`, config)
}

// export const createTask = task => api.post(resource, task)

// export const updateTask = (id, task) => api.put(`${resource}/${id}`, task)

// export const removeTask = id => api.delete(`${resource}/${id}`)

// export const completeTask = (id, task) => api.patch(`${resource}/${id}/complete`, task)