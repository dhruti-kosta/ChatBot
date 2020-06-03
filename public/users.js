const users= [];

//When user joins
function userJoin(id, username, room){
    const user = { id, username, room };
    users.push(user);
    return user;
}

//Get current user
function getCurrentUser(id){
    return users.find(user => user.id === id);
}

//Wen user leaves
function userLeave(id){
    const index = users.findIndex(user => user.id === id);
    if(index != -1){
        return users.splice(index,1)[0];
    }
}

//Get users in room
function getRoomUsers(room){
    return users.filter(user => user.room === room);
}

// exports
module.exports = {
    userJoin,
    getCurrentUser,
    userLeaves,
    getRoomUsers
}