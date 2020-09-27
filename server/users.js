const users = []
const addUser = ({ id, name, room }) => {
    //trim name and room and make lowercase
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //check if a user already exists
    const existingUser = users.find(user => user.room === room && user.name === name)

    //Throw an error message if the name exists
    if (existingUser) {
        return { error: 'Username is taken' }
    }

    const user = { id, name, room }

    //add the user to the users array.
    users.push(user)

    //return the user
    return { user }
}

const removeUser = (id) => {
    //find the user's index by id
    const index = users.findIndex(user => user.id === id)

    //if the user exists, remove him
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => users.find(user => user.id === id)

const getUsersInRoom = (room) => users.filter(user => user.room === room)

module.exports = { addUser, removeUser, getUser, getUsersInRoom }