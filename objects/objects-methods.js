let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    }, 
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    },
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        console.log(seatsLeft);
        return partySize <= seatsLeft
    },
}

restaurant.seatParty(73)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
