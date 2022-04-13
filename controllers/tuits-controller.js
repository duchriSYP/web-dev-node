//import posts from "./tuits.js";
import * as tuitsDao from "../tuits-dao.js";
//let tuits = posts;

/*const createTuit = (req, res) => {
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
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}*/

const createTuit = async (req, res) => {
    const newTuit = req.body;
    //newTuit._id = (new Date()).getTime() + '';
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
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}


const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

/*const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}*/

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.send(status);
}


/*const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}*/

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


