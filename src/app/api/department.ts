export const Department = {
    Type: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/department-type/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/department-type/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/department-type/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/department-type/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/department-type/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/department-type/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Name: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/department-name/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/department-name/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/department-name/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/department-name/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/department-name/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/department-name/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
};
