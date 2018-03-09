const api = {
    nasaPics(){
        const url = 'https://api.nasa.gov/planetary/apod?api_key=lydxUXmCkMpGc5Gg2gbiShdzhzQy2AkHv6vVHq9N'
        return fetch(url).then((res) => res.json())
    }
}

module.exports = api