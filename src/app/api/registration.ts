export const Registration = {
    Summary : {
        AnimalRegistrationAmount : {
            url: '/registration/animal-registration/summary',
            method: 'GET',
            param: {}
        }
    },
    MySelf: {
        Inquiry: {
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
                url: '/registration/myself/{myself_code}/animal-information/{animal_address_code}/pages/{page_number}',
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
    },
    Agent: {
        Inquiry: {
            AgentProfile: {
                url: '/registration/agent/agent-profile',
                method: 'GET',
                param: {}
            },
            OwnerProfileList: {
                url: '/registration/agent/{agent_code}/owner-profile/pages/{page_number}',
                method: 'GET',
                param: {}
            },
            AgentProfileByAgentCode: {
                url: '/registration/agent/agent-profile/{agent_code}',
                method: 'GET',
                param: {}
            },
            OwnerProfileByOwnerCode: {
                url: '/registration/agent/owner-profile/{owner_code}',
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
                url: '/registration/myself/{myself_code}/animal-information/{animal_address_code}/pages/{page_number}',
                method: 'GET',
                param: {}
            }
        },
        Manage: {
            AgentProfile: {
                url: '/registration/agent/agent-profile',
                method: 'POST',
                param: {}
            },
            OwnerProfile: {
                url: '/registration/agent/owner-profile',
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
