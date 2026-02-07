const yup = require('yup');

const validate = async (req, res, next) => {
 try {
    let schema = yup.object().shape({
    name: yup.string().min(2).max(10).required(),
    position: yup.string().required(),
    playNum: yup.number().positive().required()
    });
    await schema.validate(req.body);
    next();
 } catch (error) {
    res.status(400).json({ error: error.errors });//400 Bad Request
 }
}

module.exports = validate;