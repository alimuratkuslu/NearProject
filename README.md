# NEAR Movie Marketplace Project
The main idea of this project is to allow users to buy or rent their favourite movie with NEAR.

Video Link: 

# How to use:
* First clone the repositry
* Run ```yarn build:release``` and ```yarn deploy```
* Export the contract with ```export CONTRACT=dev-....```
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

2- Get movie details:
```
near view $CONTRACT getById '{"id": 4095065979}' --accountId alimuratkuslu.testnet
```
* When we put the id of the movie that we created, we can see all information about the movie

3- Update movie information:
```
near call $CONTRACT update '{"id": 4095065979, "updates": PartialMovie}' --accountId alimuratkuslu.testnet
```
* With this command we can update any information about the movie

4- Delete a movie:
```
near call $CONTRACT del '{"id": 4095065979}' --accountId alimuratkuslu.testnet
```
* With this command we can delete a movie

5- List all the movies:
```
near view $CONTRACT getAll '{"offset": 0}' --accountId alimuratkuslu.testnet
```
* With this command we can see all the movies

6- Buy a movie:
```
near call $CONTRACT buyMovieById '{"accountId": "alimuratkuslu.testnet", "id": 4095065979}' --accountId alimuratkuslu.testnet --amount 10
```
* With this command we can buy the movie and add NEAR amount that will be availabe for us on the testnet explorer

7- See movie's rent price:
```
near view $CONTRACT seeRentPrice '{"id": 4095065979}' --accountId alimuratkuslu.testnet
```
* With this command we can see the movie's rent price 

8- Rent movie:
```
near call $CONTRACT rentMovie '{"accountId":"alimuratkuslu.testnet", "id": 4095065979}' --accountId alimuratkuslu.testnet --amount 1
```
* With this command we can rent the movie


# Used Technology:
* NEAR sdk
* NEAR cli => ```npm install --global near-cli```
* NEAR-api-js
* Assembly script for writing the contract


