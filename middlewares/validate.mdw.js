import Ajv from "ajv";

function validateSpecialFeaturesFunction(schema, data) {
    if (typeof data !== 'string') {
    return false;
    }
    const allowedValues = ["Trailers", "Commentaries", "Deleted Scenes", "Behind the Scenes"];
    const components = data.split(',').map(item => item.trim());
    return components.every(component => allowedValues.includes(component));
};


export default function (schema) {
    return function validate(req, res, next) {
        const ajv = new Ajv();
        ajv.addKeyword("validate", {validate: validateSpecialFeaturesFunction});
        const valid = ajv.validate(schema, req.body)
        if (!valid) {
            console.log(ajv.errors);
            return res.status(400).json(ajv.errors)
        }
        next();
    }
}
