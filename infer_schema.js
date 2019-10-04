const { Type } = require('@avro/types');

// TODO: get unit tests to pass, add more tests
const infer_fields = fields => fields;

/**
 * Infer AVRO Schema from data
 * @param {Array} data
 * @param {Object} hints about possible types: { name: type }
 */
function infer_schema(data, hints={}) {
    // TODO: when will the next line break or get incorrect results?
    const schema = Type.forValue(data[0]);
    return {
        type: 'record',
        fields: infer_fields(schema.fields, hints)
    };
}

module.exports = infer_schema;
