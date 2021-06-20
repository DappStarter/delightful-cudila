require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad gloom private bottom sunset'; 
let testAccounts = [
"0xcaf582df8d1a55fbc98e3d4179ec8fccc8f88d44488998249954e2d8f9944733",
"0xd27b995f1ee68341307d6eb96c3eb36305eef81199c47bdfb8ca5ba1f175768c",
"0x145308d6b7846f8753c40d0a4ca59e4a411ba9e6dae96772e89f694ab445b911",
"0xa5b38cf0b439dbd7865ded2b7f279eb08fcdd3f156a66300cb9ae9da711ab8b2",
"0xc3505c2b6ae81025aabc7d0a2a2a6c08980a54ce27898da61f4d32afe72f94c2",
"0xf824753d50ad228657c95abdb9b24c16dd14f27c32865f14127b32ac9b34523d",
"0xa70f4120da25cb5567dd303e8dd584578ebcb4b9656ba4d5ba04cea0452969a3",
"0xa1591dc13191da9dddeae9923d3b5252dfdaa7e7612cefccb03edf8923234218",
"0xa5a7e9c8c54e9936bcd4309ec47258ba424133fc3eb152f1e8850374aaf32b17",
"0xd1a8664e228fed3311b72d271339d845388b7ec2db24c92dbf615846b6339c70"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

