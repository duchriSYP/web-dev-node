import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.handle = "AmongUs";
    newTuit.postedBy = { "username": "amongus" };
    newTuit.logo = "../../../tuiter/among-us.png";
    newTuit.avatar = "../../../tuiter/among-us.png";
    newTuit.stats = {
        "retuits": 111,
        "likes": 222,
        "comments": 333,
        "dislikes": 0
    }
    newTuit.liked = false;
    newTuit.disliked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    // tuits = tuits.map(tuit => {
    //     if (tuit._id === tuitdIdToUpdate) {
    //         if (updatedTuit.liked === false) {
    //             updatedTuit.stats.likes = tuit.stats.likes - 1;
    //         } else if (updatedTuit.liked === true) {
    //             updatedTuit.stats.likes = tuit.stats.likes + 1;
    //         } else if (updatedTuit.disliked === false) {
    //             updatedTuit.stats.dislikes = tuit.stats.dislikes - 1;
    //         } else {
    //             updatedTuit.stats.dislikes = tuit.stats.dislikes + 1;
    //         }
    //         return updatedTuit;
    //     } else {
    //         return tuit;
    //     }
    // })
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


