var qrcode = require('../src/qrcode')
var expect = require('chai').expect;

describe('qrcode', () => {
    it('determines if a string is a URL', () => {
        const isUrl = qrcode.isUrl('https://www.google.com')
        expect(isUrl).to.be.true
    })
    it('decodes a URL', () => {
        const decodedUrl = qrcode.decode_url('https://www.google.com')
        expect(decodedUrl).to.be.equal('https://www.google.com')
    })
    it('decodes a UTF8 string', () => {
        const decodedUrl = qrcode.decode_utf8('https://www.google.com')
        expect(decodedUrl).to.be.equal('https://www.google.com')
    })
})