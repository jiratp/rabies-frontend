export const Sample = {
    Objective: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/sample-objective/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/sample-objective/inquiry/content-list',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/sample-objective/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/sample-objective/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/sample-objective/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/sample-objective/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    }
};
