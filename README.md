# Blockchain Supply Chain DApp Solution

#### General Information
This repository contains an Ethereum DApp that simulates a supply chain from software requirements through implementation, review, testing, invoicing and paying.  
The process is simplified in this example.  
1.)	The **customer** requests a new feature by means of a topic and a description.  
2.)	The **backoffice** determines the price and sends an offer to the customer.  
3.)	The **customer** accepts the offer and releases it for development.  
4.)	The **developer** implements the feature and conducts a code review with the reviewer.  
5.)	After a successful review, the **reviewer** releases the feature for testing.  
6.)	The **tester** lets write the invoice after successful test.  
7.)	The **backoffice** sends the invoice to the customer.  
8.)	The **customer** pays for the new feature.  

#### GUI Description
The GUI is divided into 5 sections:  
1.)	Query feature information via "Feature Id"  
2.)	Specifying the allowed addresses for a specific role  
    _Here you can define which address has which role.  
    The roles are defined for the contract and are regarded as authorizations.  
    The address that was the sender of the transaction for the respective action is then set in the feature itself._
      
3.)	Creating a New Feature Request  
4.)	Send the offer to the Customer  
5.)	Execution of the individual steps in the workflow.  
6.) History of executed Transactions

**Attention:**  
The GUI describes which action is to be executed with which role.

![Fetch Information](assets/GUI_1.png)

![User Roles](assets/GUI_2.png)

![Request Feature](assets/GUI_3.png)

![Send Offer](assets/GUI_4.png)

![Workflow](assets/GUI_5.png)

#### Architecture
[UML diagrams](UML.md)  

#### Libraries
[truffle-hdwallet-provider](https://github.com/trufflesuite/truffle-hdwallet-provider) - For Rinkeby deployment  
[jQuery](https://jquery.com/)

#### Versions
Nodejs v10.20.1  
Truffle v4.1.15 (core: 4.1.15)  
Solidity v0.4.24 (solc-js)


#### Deployed on Rinkeby test network
Contract: [0xef9fc9b61522420a74b65b1d552b95c1743c14c3](https://rinkeby.etherscan.io/address/0xef9fc9b61522420a74b65b1d552b95c1743c14c3)  
TX-Address: [0xa50797ab74c0a5642cce64f98eb7cda22347fa841e3604f3e98522e4465578c6](https://rinkeby.etherscan.io/tx/0xa50797ab74c0a5642cce64f98eb7cda22347fa841e3604f3e98522e4465578c6)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

[Truffle Framework](https://truffleframework.com)  
[Metamask](https://metamask.io/)

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/tanbirhossain/Blockchain-Supply-Chain
```

Change directory to ```Blockchain-Supply-Chain``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd Blockchain-Supply-Chain
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](assets/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](assets/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](assets/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 8 tests should pass.

![truffle test](assets/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* TODO - [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.




