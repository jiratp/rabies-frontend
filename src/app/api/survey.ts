export const Survey = {
    Round: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/survey-round/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/survey-round/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/survey-round/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/survey-round/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/survey-round/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/survey-round/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Owner: {
        Inquiry: {
            ListByRound: {
                url: '/survey/owner/inquiry/round/{round_code}/pages/{page_number}',
                method: 'GET',
                param: {}
            },
            OwnerAdressByOwnerCode: {
                url: '/survey/owner/inquiry/owner-information/{owner_code}',
                method: 'GET',
                param: {}
            },
            ListAnimalInformationByOwnerCode: {
                url: '/survey/owner/inquiry/survey/{owner_code}/animal-information/pages/{page_number}',
                method: 'GET',
                param: {}
            }
        },
        Manage: {
            OwnerInformation: {
                url: '/survey/owner/owner-information',
                method: 'POST',
                param: {}
            },
            AnimalInformation: {
                url: '/survey/owner/animal-information',
                method: 'POST',
                param: {}
            }
        }
    },
    NoOwner: {
        Inquiry: {
            ListByRound: {
                url: '/survey/no-owner/inquiry/round/{round_code}/pages/{page_number}',
                method: 'GET',
                param: {}
            },
            NoOwnerAdressByNoOwnerCode: {
                url: '/survey/no-owner/inquiry/owner-information/{owner_code}',
                method: 'GET',
                param: {}
            },
            ListAnimalInformationByNoOwnerCode: {
                url: '/survey/no-owner/inquiry/survey/{owner_code}/animal-information/pages/{page_number}',
                method: 'GET',
                param: {}
            }
        },
        Manage: {
            NoOwnerInformation: {
                url: '/survey/no-owner/owner-information',
                method: 'POST',
                param: {}
            },
            AnimalInformation: {
                url: '/survey/no-owner/animal-information',
                method: 'POST',
                param: {}
            }
        }
    }
};
