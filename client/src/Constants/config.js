// All messages

export const API_NOTIFICATION_MEASSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded,Please wait'
    },
    success: {
        title: 'success',
        message: 'Data successfully loaded'
    },
    responceFailure: {
        title: 'Error',
        message: 'An error while fetching responce from the server.Please try again.'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error while parsing request data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server.Please check internet connectivity anf try again.'
    }
}


//API SERVICE CALL
export const SERVICE_URLS = {
    userSignup: {url: '/signup', method: 'POST'}
}