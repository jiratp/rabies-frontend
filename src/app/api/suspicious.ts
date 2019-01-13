export const Suspicious = {
    Inquiry: {
        InformationList: {
            url: '/suspicious/information/pages/{page_number}',
            method: 'GET',
            param: {}
        },
        InformationByCode: {
            url: '/suspicious/information/{suspicious_code}',
            method: 'GET',
            param: {}
        }
    },
    Manage: {
        Information: {
            url: '/suspicious/information',
            method: 'POST',
            param: {}
        }
    }
};
