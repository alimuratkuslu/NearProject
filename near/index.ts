import * as nearAPI from 'near-api-js';
const { connect, keyStores, WalletConnection } = nearAPI;

const keyStore = new keyStores.BrowserLocalStorageKeyStore();

const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

const near = await connect(config);

const wallet = new WalletConnection(near, 'NearProject');

const signIn = () => {
    wallet.requestSignIn(
      "example-contract.testnet", // contract requesting access
      "Example App", // optional
      "http://YOUR-URL.com/success", // optional
      "http://YOUR-URL.com/failure" // optional
    );
};

const signOut = () => {
    wallet.signOut();
};

if(wallet.isSignedIn()) {
    console.log("You have successfully signed in! ");
}

const walletAccountId = wallet.getAccountId();
const walletAccountObj = wallet.account();

const account = await near.account("example-account.testnet");
