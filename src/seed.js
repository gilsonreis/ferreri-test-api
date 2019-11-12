const mongoose = require('./database/index');
const Idea = require('./app/models/Idea')

const rows = [
    {
        "title": "Write a book",
        "content": "write a book about pudim"
    },
    {
        "title": "Lorem ipsum dolor sit amet",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet statim, quae sint officia, quae actiones. Tria genera bonorum; Cur id non ita fit? Ita multa dicunt, quae vix intellegam."
    },
    {
        "title": "Quia dolori non voluptas contraria est",
        "content": "Graccho, eius fere, aequalí? An potest cupiditas finiri? Primum in nostrane potestate est, quid meminerimus? Primum divisit ineleganter; Sed ad rem redeamus."
    },
    {
        "title": "Illa tamen simplicia, vestra versuta.",
        "content": "Sed ille, ut dixi, vitiose. Sit sane ista voluptas. Prioris generis est docilitas, memoria; Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Duo Reges: constructio interrete."
    },
    {
        "title": "Duo Reges: constructio interrete.",
        "content": "Idemne potest esse dies saepius, qui semel fuit? Non pugnem cum homine, cur tantum habeat in natura boni; Et ille ridens: Video, inquit, quid agas; Sed potestne rerum maior esse dissensio? Simus igitur contenti his. An tu me de L."
    }
];

rows.map((item) => {
    Idea.create(item).then(response => {
        console.info("Idea has been created successfuly");
        console.log(response);
    });
});