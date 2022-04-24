# NEAR Movie Marketplace Project
The main idea of this project is to allow users to buy or rent their favourite movie with NEAR.
Video Link: 

# How to use:
* First clone the repositry
* Run yarn build:release && yarn deploy 
* Export the contract with "export CONTRACT=dev-...."
* And then feel free to explore the contract

# NEAR CLI
* near login: store full access key on your local computer
* near state: shows us general information about the account
* near send: sends tokens from one account to another
* near deploy: deploy a smart contract to the blockchain
* near dev-deploy: creates a dev-account and deploy a contract on Testnet
* near call: makes a contract call (only change or view methods)
* near view: makes a contract call (only view methods)

# Basic Functions

1- Create a movie:
```
near call $CONTRACT create '{"name": "Inception", "price": 15.5, "rating": 8.8, "duration": 148, "type": "Action", "stock": 20}' --accountId alimuratkuslu.testnet
```
* If this code runs successfully, we will create the movie and the id for it. We will be using this id for all other functions. There will also be link to check for the transaction that we have made. 




