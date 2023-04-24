function submitData(name, email) {
    const userData = {name, email}
    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(userData)
    }  
    return fetch('http://localhost:3000/users', configurationObject)
    .then(response => response.json())
    .then((userData) => { 
        const newData = document.createElement('div')
    document.querySelector('body').appendChild(newData)
    newData.textContent = userData.id
    })
    .catch((message) => {
        document.querySelector('body').append(message)
})}
