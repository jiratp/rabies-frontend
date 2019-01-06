export const Animal = {
    Color: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/animal-color/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/animal-color/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/animal-color/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/animal-color/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/animal-color/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/animal-color/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Type: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/animal-type/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/animal-type/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/animal-type/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/animal-type/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/animal-type/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/animal-type/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Husbandry: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/animal-husbandry/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/animal-husbandry/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/animal-husbandry/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/animal-husbandry/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/animal-husbandry/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/animal-husbandry/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Shelter: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/animal-shelter/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/animal-shelter/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/animal-shelter/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/animal-shelter/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/animal-shelter/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/animal-shelter/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Symptom: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/animal-symptom/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/animal-symptom/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/animal-symptom/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/animal-symptom/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/animal-symptom/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/animal-symptom/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Species: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/animal-species/{animal_type_code}/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/animal-species/{animal_type_code}/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ByIdAndType: {
                url: '/animal-species/{animal_type_code}/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            },
            ById: {
                url: '/animal-species/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/animal-species/{animal_type_code}/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/animal-species/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/animal-species/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    }
};
