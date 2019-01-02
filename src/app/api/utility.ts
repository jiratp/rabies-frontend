export const Utility = {
    ReferenceType: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/reference/group/{group_code}/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/reference/group/{group_code}/inquiry/content-list',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/reference/group/{group_code}/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/reference/group/{group_code}/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/reference/group/{group_code}/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/reference/group/{group_code}/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Title: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/title/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/title/inquiry/content-list',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/title/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/title/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/title/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/title/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Department: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/department/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/department/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/department/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/department/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/department/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/department/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Role: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/role/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/role/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/role/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/role/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/role/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/role/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Region: {
        Inquiry: {
            ByList: {
                ListActive: {
                    url: '/region/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/region/inquiry/content-list/pages/{page_number}',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/region/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/region/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/region/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/region/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    Province: {
        Inquiry: {
            ByList: {
                Filter: {
                    Region: {
                        ListActive: {
                            url: '/province/inquiry/filter/{region_id}/content-list/active',
                            method: 'POST',
                            param: {}
                        }
                    }
                },
                ListActive: {
                    url: '/province/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/province/inquiry/content-list',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/province/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/province/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/province/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/province/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    District: {
        Inquiry: {
            ByList: {
                Filter: {
                    Province: {
                        ListActive: {
                            url: '/district/inquiry/province/{province_id}/content-list/active',
                            method: 'POST',
                            param: {}
                        }
                    }
                },
                ListActive: {
                    url: '/district/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/district/inquiry/content-list',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/district/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/district/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/district/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/district/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    },
    SubDistrict: {
        Inquiry: {
            ByList: {
                Filter: {
                    Province: {
                        ListActive: {
                            url: '/subdistrict/inquiry/province/{province_id}/content-list/active',
                            method: 'POST',
                            param: {}
                        }
                    },
                    District: {
                        ListActive: {
                            url: '/subdistrict/inquiry/district/{district_id}/content-list/active',
                            method: 'POST',
                            param: {}
                        }
                    }
                },
                ListActive: {
                    url: '/subdistrict/inquiry/content-list/active',
                    method: 'POST',
                    param: {}
                },
                List: {
                    url: '/subdistrict/inquiry/content-list',
                    method: 'POST',
                    param: {}
                }
            },
            ById: {
                url: '/subdistrict/inquiry/content/{content_id}',
                method: 'GET',
                param: {}
            }
        },
        Create: {
            url: '/subdistrict/create',
            method: 'POST',
            param: {}
        },
        Update: {
            url: '/subdistrict/update',
            method: 'POST',
            param: {}
        },
        Delete: {
            url: '/subdistrict/delete/{content_id}',
            method: 'GET',
            param: {}
        }
    }
};
