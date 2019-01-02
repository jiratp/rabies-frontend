export const User = {
    Access: {
        SignOn: {
            url: '/user-sign-on',
            method: 'POST',
            param: {}
        },
        ForgetPassword: {
            url: '/user-forget-password',
            method: 'POST',
            param: {}
        },
        SignOut: {
            url: '/user-sign-out',
            method: 'GET',
            param: {}
        },
        Transaction: {
            url: '/user-access/pages/{page_number}',
            method: 'GET',
            param: {}
        }
    },
    Profile: {
        Inquiry: {
            url: '/user-profile',
            method: 'GET',
            param: {}
        },
        Change: {
            url: '/user-profile',
            method: 'POST',
            param: {}
        },
        ChangePassword: {
            url: '/user-change-password',
            method: 'POST',
            param: {}
        },
        RenewPassword: {
            url: '/user-renew-password',
            method: 'POST',
            param: {}
        }
    },
    Register: {
        Create: {
            url: '/user-register',
            method: 'POST',
            param: {}
        }
    },
    Role: { }
};
