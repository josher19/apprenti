const { Type } = require('@avro/types');

describe('Use @avro/types', () => {

    const type = Type.forValue({
        city: 'Cambridge',
        zipCodes: ['02138', '02139'],
        visits: 2
    });

    const input = [
        { city: 'Seattle', zipCodes: ['98101'], visits: 3 },
        { city: 'NYC', zipCodes: [], visits: 0 }
    ];

    //TODO: is there another way we can do this to make bufs automatically get all entries in input?
    const bufs = [
        type.toBuffer(input[0]),
        type.toBuffer(input[1])
    ];

    test('fromBuffer inverse of toBuffer', () => {
        expect(type.fromBuffer(bufs[0])).toEqual(input[0]);
        expect(type.fromBuffer(bufs[0])).toEqual(input[0]);
    });

});

describe('Specify schema using forSchema', () => {
    const type = Type.forSchema({
        type: 'record',
        fields: [
            { name: 'kind', type: { type: 'enum', symbols: ['CAT', 'DOG'] } },
            { name: 'name', type: 'string' }
        ]
    });

    const buf = type.toBuffer({ kind: 'CAT', name: 'Albert' }); // Encoded buffer.
    const val = type.fromBuffer(buf); // = {kind: 'CAT', name: 'Albert'}
    test('fromBuffer inverse of toBuffer', () => {
        expect(val).toEqual({ kind: 'CAT', name: 'Albert' })
        expect(type.toBuffer(val)).toEqual(buf);
    });

    test('toBuffer inverse of fromBuffer', () => {
        expect(type.toBuffer(val)).toEqual(buf);
    });

    // if toBuffer is the inverse of fromBuffer,
    // isn't fromBuffer automatically the inverse of toBuffer?

});

describe('Guess schema using forValue', () => {
    const type = Type.forValue({
        city: 'Cambridge',
        zipCodes: ['02138', '02139'],
        visits: 2
    });

    test('has 3 fields', () => {
        expect(type.fields && type.fields.length).toBe(3);
        // console.log(type.fields);
    });

});
