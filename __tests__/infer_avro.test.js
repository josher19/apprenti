const infer_schema = require('../infer_schema');

const basic_schema = {
    type: 'record',
    fields: [
        { name: 'kind', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'age', type: 'number' }
    ]
};

const enum_schema = {
    type: 'record',
    fields: [
        { name: 'kind', type: { type: 'enum', symbols: ['CAT', 'DOG'] } },
        { name: 'name', type: 'string' },
        { name: 'age', type: 'number' }
    ]
};

// TODO: const array_schema = ?

const data = [
    { kind: 'CAT', name: 'Albert' },
    { kind: 'DOG', name: 'Sammi' }
];

describe('infer schema', () => {
    test('should by a function', () => {
        const expected = 'function';
        const tested = typeof infer_schema;
        expect(tested).toEqual(expected);
    });
    test('should infer basic schema from data', () => {
        const expected = basic_schema;
        const tested = infer_schema(data);
        expect(tested).toEqual(expected);
    });

    test('should infer enums from data with hint', () => {
        const expected = enum_schema;
        const tested = infer_schema(data, { "kind": "enum" });
        expect(tested).toEqual(expected);
    });
});

