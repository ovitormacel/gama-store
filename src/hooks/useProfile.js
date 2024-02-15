//Fetch Data Profile
export function getDataProfile(userSigned) {

    const storage = JSON.parse(localStorage.getItem("users-local-db"));

    const hasUser = storage?.filter((user) => user.email === userSigned.email);

    if(hasUser.length){
        return hasUser[0];
    }else{
        throw new Error("Usuário não encontrado no Banco de Dados");
    }
}

//Update Data Profile
export function updateDataProfile(userData, userIndex) {
    const storage = JSON.parse(localStorage.getItem("users-local-db"));

    storage[userIndex] = userData;
    localStorage.setItem("users-local-db", JSON.stringify(storage));
}