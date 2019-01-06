export const Content = {
    News: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/content-news/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/content-news/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/content-news/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/content-news/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/content-news/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/content-news/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Document: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/content-document/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/content-document/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/content-document/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/content-document/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/content-document/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/content-document/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    DocumentType: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/content-document-type/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/content-document-type/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/content-document-type/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/content-document-type/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/content-document-type/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/content-document-type/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Video: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/content-video/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/content-video/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/content-video/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/content-video/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/content-video/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/content-video/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
};
