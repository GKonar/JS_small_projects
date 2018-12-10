let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only vegan food');
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan food');
} else {
    console.log('Give them menu');
}