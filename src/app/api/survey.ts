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
    }
};
