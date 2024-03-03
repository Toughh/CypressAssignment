import { ACCESS_TOKEN_ENDPOINT, BOOKINGS_ENDPOINT } from './endpoints';

export const getAccessToken = (tokenData) => {
    return ({
        method: 'POST',
        url: ACCESS_TOKEN_ENDPOINT,
        headers: {
            'Content-Type': 'application/json'
        },
        body: tokenData
    });
};

export const createBookingRequest = (bookingData) => {
    return ({
        method: 'POST',
        url: BOOKINGS_ENDPOINT,
        body: bookingData
    });
};

export const updateBooking = (bookingId, accessToken, bookingData) => {
    return ({
        method: 'PUT',
        url: `${BOOKINGS_ENDPOINT}/${bookingId}`,
        body: bookingData,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${accessToken}`
        },
    });
};

export const deleteBooking = (bookingId, accessToken) => {
    return ({
        method: 'DELETE',
        url: `${BOOKINGS_ENDPOINT}/${bookingId}`,
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `token=${accessToken}`
        },
    });
};

export const getBooking = (bookingId) => {
    return ({
        method: 'GET',
        url: `${BOOKINGS_ENDPOINT}/${bookingId}`,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const patchBooking = (bookingId, accessToken, bookingData) => {
    return ({
        method: 'PATCH',
        url: `${BOOKINGS_ENDPOINT}/${bookingId}`,
        body: bookingData,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${accessToken}`
        },
    });
};
