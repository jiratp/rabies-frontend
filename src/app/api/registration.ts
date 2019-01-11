export const Registration = {
    MySelf: {
        Inquiry:{
            AnimalOwnerProfile: {
                url: '/registration/myself/animal-owner-profile',
                method: 'GET',
                param: {}
            },
            AnimalOwnerProfileById: {
                url: '/registration/myself/animal-owner-profile/{animal_owner_profile_code}',
                method: 'GET',
                param: {}
            },
            AnimalOwnerAddress: {
                url: '/registration/myself/{myself_code}/animal-owner-address/pages/{page_number}',
                method: 'GET',
                param: {}               
            },
            AnimalOwnerAddressById: {
                url: '/registration/myself/{myself_code}/animal-owner-address/{animal_address_code}',
                method: 'GET',
                param: {}               
            },
            AnimalInformation: {
                url: '/registration/myself/{myself_code}/animal-owner-address/{address_code}/pages/{page_number}',
                method: 'GET',
                param: {}               
            }
        },
        Manage: {
            AnimalOwnerProfile: {
                url: '/registration/myself/animal-owner-profile',
                method: 'POST',
                param: {}
            },
            AnimalOwnerAddress: {
                url: '/registration/myself/animal-owner-address',
                method: 'POST',
                param: {}               
            },
            AnimalInformation: {
                url: '/registration/myself/animal-information',
                method: 'POST',
                param: {}               
            }
        }
    }
};