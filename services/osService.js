const os = require('os');

const findAll = (req, res) => {
    res.json({
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform()
    });
};

const findCpus = (req, res) => {
    res.json(os.cpus());
};

const findCpusById = (req, res) => {
    const cpus = os.cpus();
    const cpu = cpus[req.params.id];
    res.json(cpu);
}

module.exports = {
    findAll,
    findCpus,
    findCpusById
};