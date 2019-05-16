import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/signup', {
            full_name : newUser.full_name,
            email : newUser.email,
            username : newUser.username,
            password : newUser.password
        })
        .then(res => {
            console.log('registered')
        })

}

export const login = user => {
    return axios
        .post('users/signin', {
            email : user.email,
            password : user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const reserve = newBooking => {
    return axios
        .post('/reservation' ,{
            full_name : newBooking.full_name,
            email : newBooking.email,
            from : newBooking.from,
            to : newBooking.to,
            nic : newBooking.nic
        })
        .then(res => {
            console.log(newBooking)
        })
}