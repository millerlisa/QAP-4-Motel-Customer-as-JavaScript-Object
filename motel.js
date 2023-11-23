// Motel guest object
// Lisa Miller
// November 16, 2023

const guest = {
    firstName: "Norma",
    lastName: "Bates",
    birthYear: "1959",
    gender: "female",
    roomPreference: ["Higher floor", "Away from elevator", "Away from stairs", "Away from housekeeping", "Away from maintenance", "Away from parking lot", "Ocean view", "Mountain view"],
    paymentMethod: "cash",
    mailingAddress: {
        streetAddress: "1054 272 Street ",
        city: "Aldergrove",
        province: "BC",
        postalCode: "V0V0A0",
        country: "Canada"
    },
    phoneNumber: "604-856-2584",
    stay: {
        checkInDate: "11-16-2023",
        checkOutDate: "11-18-2023"
    },
    getAge: function calculateAge(){ 
        const today = new Date();
        return today.getFullYear() - this.birthYear
    },
    lengthOfStay: function calculateDuration() {
        const checkIn = new Date(this.stay.checkInDate);
        const checkOut = new Date(this.stay.checkOutDate);
        let differenceInTime = checkOut.getTime() - checkIn.getTime();
        let numberOfDays = differenceInTime / (1000 * 3600 * 24);
        return numberOfDays;
    }   

};

console.log(`The Oasis Motel is pleased to welcome valued guest ${guest.firstName} ${guest.lastName}. Ms ${guest.lastName} is ${guest.getAge()} years old and we have had the pleasure of serving her for most of those years, along weith her family. She will be staying with us for ${guest.lengthOfStay()} days.

Let's do our best to make her stay a pleasant one.

Her room preferences are: 

    ${guest.roomPreference[0]}
    ${guest.roomPreference[1]}
    ${guest.roomPreference[2]}
    ${guest.roomPreference[3]}
    ${guest.roomPreference[4]}
    ${guest.roomPreference[5]}
    ${guest.roomPreference[6]} or ${guest.roomPreference[7]}

If we are unable to accommodate her preferences, please discount her rate by 20%  and inform her of this as soon as possible, she can be reached by telephone at ${guest.phoneNumber}.

When you speak with Ms. ${guest.lastName}, verify her mailing address is as follows:

     ${guest.mailingAddress.streetAddress} 
     ${guest.mailingAddress.city}, ${guest.mailingAddress.province}
     ${guest.mailingAddress.postalCode}
     ${guest.mailingAddress.country}. 

Ms. ${guest.lastName} will be paying with ${guest.paymentMethod}, please have her invoice ready for her upon check-out. 

Thank you for your attention to this matter.`) 