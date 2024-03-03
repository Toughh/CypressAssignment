import { deleteBooking, getAccessToken, getBooking, patchBooking } from '../../apiRequests';
import { createBookingRequest, updateBooking } from '../../apiRequests';

describe('Booking Test API', () => {
    it('TC001_To verify if able to create booking', () => {
        cy.fixture('requestPayload/createUserBooking.json').then((userData) => {
            cy.request(createBookingRequest(userData))
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('bookingid');
                    expect(response.body.bookingid).to.be.a('number');
                });
        });
    });

    it('TC002_To verify if able to update booking', () => {
        cy.fixture('requestPayload/createUserBooking.json').then((userData) => {
            cy.request(createBookingRequest(userData))
                .then((response) => {
                    expect(response.status).to.eq(200);
                    let booking_id = response.body.bookingid;
                    let created_first_name = response.body.booking.firstname;
                    let created_last_name = response.body.booking.lastname;
                    let created_totalprice = response.body.booking.totalprice;
                    let created_depositpaid = response.body.booking.depositpaid;
                    let created_checkin = response.body.booking.bookingdates.checkin;
                    let created_checkout = response.body.booking.bookingdates.checkout;
                    let created_additionalneeds = response.body.booking.additionalneeds;

                    cy.fixture('requestPayload/tokenPayload.json').then((tokenData) => {
                        cy.request(getAccessToken(tokenData))
                            .then((response) => {
                                expect(response.status).to.eq(200);
                                let access_token = response.body.token;

                                cy.fixture('requestPayload/updateUserBooking.json').then((userData) => {
                                    cy.request(updateBooking(booking_id, access_token, userData))
                                        .then((response) => {
                                            expect(response.status).to.eq(200);
                                            let updated_first_name = response.body.firstname;
                                            let updated_last_name = response.body.lastname;
                                            let updated_totalprice = response.body.totalprice;
                                            let updated_depositpaid = response.body.depositpaid;
                                            let updated_checkin = response.body.bookingdates.checkin;
                                            let updated_checkout = response.body.bookingdates.checkout;
                                            let updated_additionalneeds = response.body.additionalneeds;

                                            expect(updated_first_name).not.eq(created_first_name);
                                            expect(updated_last_name).not.eq(created_last_name);
                                            expect(updated_totalprice).not.eq(created_totalprice);
                                            expect(updated_depositpaid).not.eq(created_depositpaid);
                                            expect(updated_checkin).not.eq(created_checkin);
                                            expect(updated_checkout).not.eq(created_checkout);
                                            expect(updated_additionalneeds).not.eq(created_additionalneeds);
                                        });
                                });
                            });
                    });
                });
        });
    });

    it('TC003_To verify if able to delete booking', () => {
        cy.fixture('requestPayload/createUserBooking.json').then((userData) => {
            cy.request(createBookingRequest(userData))
                .then((response) => {
                    expect(response.status).to.eq(200);
                    let booking_id = response.body.bookingid;

                    cy.fixture('requestPayload/tokenPayload.json').then((tokenData) => {
                        cy.request(getAccessToken(tokenData))
                            .then((response) => {
                                expect(response.status).to.eq(200);
                                let access_token = response.body.token;

                                cy.request(deleteBooking(booking_id, access_token))
                                    .then((response) => {
                                        expect(response.status).to.eq(201);
                                        expect(response.body).to.eq('Created');
                                    });
                            });
                    });
                });
        });
    });

    it('TC004_To verify if able to get booking', () => {
        cy.fixture('requestPayload/createUserBooking.json').then((userData) => {
            cy.request(createBookingRequest(userData))
                .then((response) => {
                    expect(response.status).to.eq(200);
                    let booking_id = response.body.bookingid;
                    let created_first_name = response.body.booking.firstname;
                    let created_last_name = response.body.booking.lastname;
                    let created_totalprice = response.body.booking.totalprice;
                    let created_depositpaid = response.body.booking.depositpaid;
                    let created_checkin = response.body.booking.bookingdates.checkin;
                    let created_checkout = response.body.booking.bookingdates.checkout;
                    let created_additionalneeds = response.body.booking.additionalneeds;

                    cy.request(getBooking(booking_id))
                        .then((response) => {
                            expect(response.status).to.eq(200);
                            let updated_first_name = response.body.firstname;
                            let updated_last_name = response.body.lastname;
                            let updated_totalprice = response.body.totalprice;
                            let updated_depositpaid = response.body.depositpaid;
                            let updated_checkin = response.body.bookingdates.checkin;
                            let updated_checkout = response.body.bookingdates.checkout;
                            let updated_additionalneeds = response.body.additionalneeds;

                            expect(updated_first_name).to.eq(created_first_name);
                            expect(updated_last_name).to.eq(created_last_name);
                            expect(updated_totalprice).to.eq(created_totalprice);
                            expect(updated_depositpaid).to.eq(created_depositpaid);
                            expect(updated_checkin).to.eq(created_checkin);
                            expect(updated_checkout).to.eq(created_checkout);
                            expect(updated_additionalneeds).to.eq(created_additionalneeds);
                        });
                });
        });
    });

    it('TC005_To verify if able to patch booking', () => {
        cy.fixture('requestPayload/createUserBooking.json').then((userData) => {
            cy.request(createBookingRequest(userData))
                .then((response) => {
                    expect(response.status).to.eq(200);
                    let booking_id = response.body.bookingid;
                    let created_first_name = response.body.booking.firstname;
                    let created_last_name = response.body.booking.lastname;
                    let created_totalprice = response.body.booking.totalprice;
                    let created_depositpaid = response.body.booking.depositpaid;
                    let created_checkin = response.body.booking.bookingdates.checkin;
                    let created_checkout = response.body.booking.bookingdates.checkout;
                    let created_additionalneeds = response.body.booking.additionalneeds;

                    cy.fixture('requestPayload/tokenPayload.json').then((tokenData) => {
                        cy.request(getAccessToken(tokenData))
                            .then((response) => {
                                expect(response.status).to.eq(200);
                                let access_token = response.body.token;

                                cy.fixture('requestPayload/partialUpdateUserBooking.json').then((userData) => {
                                    cy.request(patchBooking(booking_id, access_token, userData))
                                        .then((response) => {
                                            expect(response.status).to.eq(200);
                                            let updated_first_name = response.body.firstname;
                                            let updated_last_name = response.body.lastname;
                                            let updated_totalprice = response.body.totalprice;
                                            let updated_depositpaid = response.body.depositpaid;
                                            let updated_checkin = response.body.bookingdates.checkin;
                                            let updated_checkout = response.body.bookingdates.checkout;
                                            let updated_additionalneeds = response.body.additionalneeds;

                                            expect(updated_first_name).not.eq(created_first_name);
                                            expect(updated_last_name).not.eq(created_last_name);
                                            expect(updated_totalprice).to.eq(created_totalprice);
                                            expect(updated_depositpaid).to.eq(created_depositpaid);
                                            expect(updated_checkin).to.eq(created_checkin);
                                            expect(updated_checkout).to.eq(created_checkout);
                                            expect(updated_additionalneeds).to.eq(created_additionalneeds);

                                        });
                                });
                            });
                    });
                });
        });
    });
});
