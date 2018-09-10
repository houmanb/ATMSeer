export const URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:7777'
    : 'location.origin'

export const UPDATE_INTERVAL_MS = 5000;
export const USER_STUDY = true;
// user_study == false , then user study related modules will be disabled.
// including, set name, post click event, early stoppings.
