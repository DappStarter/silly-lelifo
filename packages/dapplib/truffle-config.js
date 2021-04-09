require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strategy crawl random coast hundred light army giggle'; 
let testAccounts = [
"0x6f3dee2736c2c450118b784fb4a9e0e41bdac0475cd6159ce1aa1706c328900f",
"0x65c4c5970850a7f09b6b9d569ad9eedc64a6189c58497d1ca0e0f4a21599c14d",
"0x298827a0955ab3795408b7098280c30576db7ca24a06753bb03cf8df00c0e201",
"0x52db3eff8191a61bbf1a67a772eb3054438673db9b7e286a146014f0fcbafc2e",
"0x44439896a4a900f71059888d257ae2e519d4c5650bbdddd6741639391ed80485",
"0x7ed8a35478e09895886c7c716bc1327c6a990946d2b341db9fc3862fa081822f",
"0xd95c638391c4291a5152c12743fa92ea38deb4f1cae2e86ef5b0006cbe28f8dc",
"0xd883c76dd5209197f5b00c5465f3172c577fcfcbb8b114d7cad674dd633c13ff",
"0xad24eca8b62644aa62f10f8f7270d5b11b72db719eab0402f929ddfffbc7c5a5",
"0x982123b5c080a959b3450cd7b51f382cf0b7d90bea4c4f4233f6c01e5b561b56"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
