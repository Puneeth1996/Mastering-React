const address = {
    street: "VPura",
    city: "Bangalore",
    country: "India"
};

const street = address.street;
const city = address.city;
const country = address.country;

const {
    street: st,
    city
} = address;

console.log(st);