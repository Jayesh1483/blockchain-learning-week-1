# ***Blockchain Summary Assignment***
![Blockchain](https://www.wipo.int/export/sites/www/shared/images/socialmedia/2020_dig_art_2_1200.jpg)

## **Concept of Blockchain**
### **What is blockchain technology?**
Blockchain technology is an advanced database mechanism that allows transparent information sharing across the network. A blockchain is “a decentralized and distributed digital ledger consists of a chain of blocks, each containing a batch of transactions.” These blocks are linked using [cryptography](https://www.fortinet.com/resources/cyberglossary/what-is-cryptography#:~:text=Cryptography%20is%20the%20process%20of,%2C%20computer%20passwords%2C%20and%20ecommerce. "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it."). That means in order to access or add data on the database, you need two cryptographic keys: a public key, which is basically the address in the database, and the private key, which is a personal key that must be authenticated by the network. Unlike traditional centralized databases like banking institutions, blockchain is decentralized, which means there is no cetral identity that controls the network and is distributed between the nodes, or participants, of a public or private computer network. This is known as distributed ledger technology, which makes it highly resistant to tampering or fraud.Changing data in one block would require altering it on all copies across the network, which is virtually impossible.

### **Traditional vs Blockchain Database**
Traditional databases use client-server network architecture. Here, a user (known as a client) can modify data, which is stored on a centralized server. Control of the database remains with a designated authority, which authenticates a client’s credentials before providing access to the database. Since this authority is responsible for administration of the database, if the security of the authority is compromised, the data can be altered, or even deleted.

Blockchain databases consist of several decentralized nodes. Each node participates in administration: all nodes verify new additions to the blockchain, and are capable of entering new data into the database. For an addition to be made to the blockchain, the majority of nodes must reach consensus. This consensus mechanism guarantees the security of the network, making it difficult to tamper with. **As an example:** In Bitcoin, consensus is reached by mining (solving complex hashing puzzles), while Ethereum seeks to use proof of stake as its consensus mechanism. A key property of blockchain technology, which distinguishes it from traditional database technology, is public verifiability, which is enabled by integrity and transparency.
1. **Integrity:** every user can be sure that the data they are retrieving is uncorrupted and unaltered since the moment it was recorded.
2. **Transparency:** every user can verify how the blockchain has been appended over time

### **Structure and Addition of Blocks in Blockchain**

The blockchain data structure is an ordered, back-linked list of blocks of transactions. The blockchain can be stored as a flat file, or in a simple database. Blocks are linked “back,” each referring to the previous block in the chain. The blockchain is often visualized as a vertical stack, with blocks layered on top of each other and the first block serving as the foundation of the stack. The visualization of blocks stacked on top of each other results in the use of terms such as “height” to refer to the distance from the first block, and “top” or “tip” to refer to the most recently added block. 

Each block within the blockchain is identified by a hash, which is generated using an algorithm such as the SHA256 cryptographic hash algorithm  **for bitcoin** and  Keccak-256 hashing algorithm **for etherum** on the header of the block. Each block also references a previous block, known as the parent block, through the “previous block hash” field in the block header. In other words, each block contains the hash of its parent inside its own header. The sequence of hashes linking each block to its parent creates a chain going back all the way to the first block ever created, known as the ["genesis block"](https://www.geeksforgeeks.org/genesis-block-in-blockchain/).

![Block connectivity in Blockchain](https://www.researchgate.net/publication/332715800/figure/fig1/AS:961445655236611@1606237915163/Simplified-diagram-of-a-blockchain.png)

## **Components of a Block**
A block is a container data structure that aggregates transactions for inclusion in the public ledger, the blockchain. The block is made of a header, containing metadata, followed by a long list of transactions that make up the bulk of its size. The block header is 80 bytes, whereas the average transaction is at least 250 bytes and the average block contains more than 500 transactions. A complete block, with all transactions, is therefore 1000 times larger than the block header. Let's understand the components of a Block using a conceptual image with reference to a ledger of transactions.

![Transaction Image](https://lh6.googleusercontent.com/62jaeuIT3RcDK3ENsV9P39acRfAb_n3rDDQiDQi7mxhN8dqTObwTEc5U3nD_0f0Wu8_URgAozqZT3wVbcVul-12w7QA8JObZT7DsxD8YG0BsgEiBSi9MkZVGEwrsJlHvgxBOyPQo)

**Following are the significant elements of a block –** 

**Block Height –** It’s the sequence number of the block in the chain of blocks. Block Height: 1 is the genesis block (first block in the network).

**Block Size –** It’s a 4-bytes or 32-bit field that contains the size of the block. It adds size in Bytes. Ex – Block Size: 216 Bytes.

**Block Reward –** This field contains the amount rewarded to the miner for adding a block of transactions.

**Tx Count –** The transaction counter shows the number of transactions contained by the block. The field has a maximum size of 9 bytes.

**Block Header –** The Block header is an 80-Byte field that contains the metadata – the data about the block. All the blocks in the blockchain are managed with the help of the block header.

**Let’s briefly discuss the 6 components of the Block Header.**

1. **Time –**  Timestamp in the blockchain is used as proof that the particular block is used at what instance of a time, also this timestamp is used as a parameter to verify the authenticity of any block.

2. **Version –** It’s a 4-bytes field representing the version number of the protocol used. There are four types of Blockchain version.
    * **Blockchain Version 1.0(cryptocurrency)-** It used a public ledger to store the data, for example, Bitcoin.
    * **Blockchain Version 2.0(smart Contract)-** It is called smart contracts which is self-executing programs, for example, Ethereum.
    * **Blockchain Version 3.0(DAPPS)-** It is used to create a decentralized structure, for example, tor Browser.
    * **Blockchain Version 4.0(Blockchain for Industry)-** It is used to create a scalable, affordable blockchain network such that more people could use it.

3. **Previous Block Hash –** It’s a 32-bytes field that contains a 256-bits hash (created by SHA-256 cryptographic hashing) of the previous block. This helps to create a linear chain of blocks. 

4. **Bits –** It’s a 4-bytes field that tells the complexity to add the block. It’s also known as “difficulty bits.” According to PoW, the block hash should be less than the difficulty level.It specifies the complexity and the computation power required to mine the network, if we are having a high difficulty target then it implies that we need more a computationally expensive machine to mine it.

5. **Nonce –** It’s a 4-bytes field that contains a 32-bit number. These are the only changeable element in a block of transactions. It is abbreviated as ‘number only used once’ and it is a number which blockchain miners are finding and on average, it takes almost 10 times to find out the correct nonce. It's a 32-bit number, having the maximum 2^(32) total possible value, so the job of the bitcoins miners is to find out the correct integer value which is a random integer between 0 and 2^(32), so it becomes computationally expensive.

6. **Merkle Root –** A 32-bytes field containing a 256-bit root hash.A Merkle root uses mathematical formulas to check if the data is not corrupted, hacked, or manipulated. For example, Suppose one block has 10 transactions, then to identify that block we need 10 transactions to combine and form one Hash Value, so it uses the concept of the binary tree to create the hash of the block and that value is called the Merkle Root.

![Merkle Root Image](https://static.javatpoint.com/tutorial/blockchain/images/blockchain-merkle-tree.png)

## **Significance of Hashing in Blockchain**

Hashing is a cryptography method that converts any form of data to a unique text string. Any piece of data can be hashed, regardless of its size or type. It is a mathematical procedure that is easy to execute but is incredibly difficult to reverse. The difference between hash and encryption is that the encryption can be reversed or decrypted using a specific key. The most extensively used hash functions are MD5, SHA1, and SHA-256. The hash function takes the input of variable lengths and returns outputs of fixed lengths. In cryptographic hash functions, the transactions are taken as inputs and the hash algorithm gives an output of a fixed size. The below diagram shows how hashes work.
![Hash Function](https://media.geeksforgeeks.org/wp-content/uploads/20200404004817/Untitled-Diagram-48.jpg)

Hashes are used in several parts of a blockchain system. Each block header contains the previous block's hash, which ensures that nothing has been tampered with as new blocks are added. Cryptocurrency blockchains use hashes to secure information and make the ledger immutable. The information encrypted by the hashing function is validated by network participants when they attempt to generate a hash less than the network target. Once the target hash is reached, the network closes the block consensus is reached after the block closes because the network continues to validate transactions and block information after the hash is solved.


## **Working of Blockchain**
In Blockchain, when a new transaction is initiated it is broadcast to the network of nodes. Each node then verifies the transaction and adds it to its own copy of the ledger. Once the majority of nodes have verified the transaction, it is added to a new block.Once a transaction is added to the blockchain, it cannot be changed or deleted. This is because any change to a block would also require changes to all subsequent blocks in the chain. This would require the consensus of the entire network, which is very difficult to achieve.


### **Transaction Process in Blockchain**
The transaction process in a blockchain can be summarized in 6 steps: 1) Facilitating a transaction, 2) Verification of Transaction, 3) Formation of a new block, 4) Consensus Algorithm/Mining, 5) Addition of the new block to blockchain, 6) Transaction Complete.

**Let’s understand this working of blockchain with the help of an example:**  

Let’s say Jack and Phil are two nodes on the bitcoin blockchain network who wants to carry out a transaction between them. 


![Transaction Image](https://media.geeksforgeeks.org/wp-content/uploads/20220518004235/BlockchainF1.jpg)


**Step 1: Facilitating the transaction:** Jack wants to send 20 BTC to Phil via the Blockchain network. 

**Step 2: Verification of transaction:** The message for verification will be sent to all the nodes on the network. All the nodes will check the important parameters related to the transaction like Does Jack has sufficient balance i.e. at least 20BTC to perform the transaction. Is Jack a registered node? Is Phil a registered node? After checking the parameters the transaction is verified.

**Step 3: Formation of a new block:** A number of verified transactions stack up in mempools and get stored in a block. This verified transaction will also get stored in a block.

**Step 4: Consensus algorithm/Mining:** Since here we are talking about bitcoins so the Proof-of-Work consensus algorithm will be used for block verification. In proof-of-work, the system assigns the target hash value to a node/miner, and according to this, it must come up with a hash for the new block. The node has to calculate the hash value for the new block that is less than the target value. If two or more miners mine the same block at the same time, the block with more difficulty is selected. The others are known as stale blocks. Mining usually rewards miners with blockchain currency. In this case, the blockchain currency is bitcoin. 

**Step 5: Addition of the new block in the blockchain:** After the newly created block has got the hash value and authentication through proof-of-work only then it will be added to the network and the transaction will mark as complete. Phil will receive 20 BTC from Jack.The new block will be linked to the open end of the blockchain. 

**Step 6: Transaction complete:** As soon as the block is added to the blockchain, the transaction will take place and 20 BTCs will get transferred from Jack’s wallet to Phil’s wallet. The blocks above count as “confirmations”. By convention, any block with more than 6 confirmations is considered irrevocable, as it would require an immense amount of computation to invalidate and re-calculate six blocks.The details of the transaction are permanently secured on the blockchain.

Anyone on the network can fetch the information and confirm the transaction. This will help to keep track of all the transactions and to verify whether any user is trying to double spend. For example, if Jack tries to carry out a transaction in the future, the rest of the nodes can check Jack’s past transaction records to check whether Jack has enough balance to carry out the current transaction. If there is enough balance then the transaction will be approved.

## **Role of Miners in Blockchain**

 Miners are an essential part of the blockchain network. They are responsible for verifying transactions and adding them to the blockchain. Miners use powerful computers such as Graphical Processing Units (GPUs) or Application Specific Integrated Circuits (ASIC), essentially hundreds of mining algorithms printed in hardware, running in parallel on a single silicon chip to solve complex mathematical problems that allow them to validate transactions. 
In order to add a transaction to the blockchain, a miner must first verify that the transaction is valid. This involves checking that the sender has enough funds to complete the transaction and that the transaction has not already been recorded on the blockchain. Once a miner has verified a transaction, they add it to a block along with other verified transactions. The miner then uses their computing power to solve a cryptographic puzzle that allows them to add the block to the blockchain. This process is called mining.

Miners play a crucial role in the blockchain ecosystem. Without miners, the blockchain would not be able to function. Here are some of the reasons why miners are so important:

**Security -** One of the key benefits of blockchain technology is its security. The blockchain is designed to be tamper-proof, meaning that once a transaction is recorded on the blockchain, it cannot be altered or deleted. Miners help to maintain the security of the blockchain by verifying transactions and adding them to the ledger. This ensures that the ledger remains accurate and up-to-date, and that fraudulent transactions are not recorded.

**Decentralization -** Another important aspect of the blockchain is its decentralized nature. Unlike traditional centralized systems, where a single entity controls the data, the blockchain is maintained by a network of nodes that work together to ensure the integrity of the ledger. Miners play a key role in maintaining the decentralization of the blockchain. Because mining is open to anyone with the right equipment, it ensures that no single entity has control over the network.

**Incentivization -** Finally, miners are incentivized to maintain the security and decentralization of the blockchain through a reward system. When a miner successfully adds a block to the blockchain, they are rewarded with a certain amount of cryptocurrency. This reward system encourages miners to continue to validate transactions and add them to the blockchain. It also ensures that the blockchain remains secure and decentralized, as miners have a financial incentive to act in the best interests of the network.

## **Consensus in Blockchain network:** 

When we think of Consensus in Blockchain. The question comes in our mind that **How can everyone in the network agree on a single universal “truth” about who owns what, without having to trust anyone?**  All traditional payment systems depend on a trust model that has a central authority providing a clearinghouse service, basically verifying and clearing all transactions. **As an example:** Bitcoin has no central authority, yet somehow every node has a complete copy of a public ledger that it can trust as the authoritative record. The blockchain is not created by a central authority, but is assembled independently by every node in the network. Somehow, every node in the network, acting on information transmitted across insecure network connections can arrive at the same conclusion and assemble a copy of the same public ledger as everyone else. 

De-centralized consensus emerges from the interplay of four processes that occur independently on nodes across the network:
1.  Independent verification of each transaction, by every full node, based on a comprehensive list of criteria
2.  Independent aggregation of those transactions into new blocks by mining nodes, coupled with demonstrated computation
    through a Proof-of-Work algorithm
3.  Independent verification of the new blocks by every node and assembly into a chain
4.  Independent selection, by every node, of the chain with the most cumulative computation demonstrated through Proof-of-Work or Proof-of-Stake

## **CryptoCurrency**

Cryptocurrency is a digital payment system that does not rely on banks to verify transactions. Cryptocurrency payments exist purely as digital entries to an online database. When cryptocurrency funds are transferred, the transactions are recorded in blockchain which makes it possible to ensure transparency and protect the financial information and identity of crypto buyers and sellers. Cryptocurrencies leverage blockchain technology to ensure security, transparency, and decentralization in a number of ways:

1. **Security -** Blockchain technology is highly secure due to its use of cryptography and decentralized architecture. Cryptography is used to encrypt all data on the blockchain, making it tamper-proof. The decentralized architecture means that there is no single point of failure, making the blockchain more resistant to attack.
2. **Transparency -** All transactions on a blockchain are public and transparent, meaning that anyone can view them. This makes it difficult for fraud or other nefarious activity to go undetected.
3. **Decentralization -** Blockchain technology is decentralized, meaning that it is not controlled by any single entity. This makes it more resistant to censorship and manipulation.

Below are some examples of how security, transparent, and decentralization of blockchain is used by cryptocurrencies.

1. **Transaction processing -** When a cryptocurrency transaction is made, it is broadcast to the entire blockchain network. Nodes on the network verify the transaction and add it to the next block in the chain. Once a transaction is added to a block, it cannot be reversed. This makes cryptocurrency transactions highly secure and tamper-proof.
2. **Ownership -** Cryptocurrency ownership is verified by the blockchain. When a user purchases cryptocurrency, they receive a private key that gives them access to their funds. The private key is stored in the user's cryptocurrency wallet. The blockchain is used to verify that the user owns the private key before they can spend their funds.
3. **Decentralization -** Cryptocurrency is decentralized, meaning that there is no central authority that controls it. This is achieved through the use of blockchain technology. The blockchain is a distributed ledger that is maintained by a network of nodes. All nodes on the network have a copy of the blockchain and must verify all transactions before they are added to the chain. This makes it very difficult for any single entity to manipulate the cryptocurrency network.

## **Wallets, Public/Private Key and Addresses**

Ownership of bitcoin is established through digital keys, bitcoin addresses and digital signatures. The digital keys are not actually stored in the network, but are instead created and stored by end-users in a file, or simple database, called a wallet. The digital keys in a user’s wallet are completely independent of the bitcoin protocol and can be generated and managed by the user’s wallet software without reference to the blockchain or access to the Internet. Keys enable many of the interesting properties of bitcoin, including decentralized trust and control, ownership attestation and the cryptographic proof security model.

**Cryptocurrency wallets** are software or hardware applications that allow users to store, send, and receive cryptocurrency. Wallets can be physical devices or online software. Not all exchanges or brokers provide crypto wallet services. The cryptocurrencies can be stored in these four places:

1. **Custodial Wallet -** In this approach, a third party such as a crypto exchange stores the cryptocurrency either through cold storage or hot storage, or a combination of the two. This is the most simplest and convenient method for the users as it requires less work on the user’s part. 
2. **Cold Wallet -** These are also known as Hardware wallets. It is an offline wallet in which hardware connects to the computer and stores the cryptocurrency. The device connects to the internet at the time of sending and receiving cryptocurrency but other than that the cryptos are safely stored offline.
3. **Hot Wallet -** These are the applications that store cryptocurrencies online. These are available as desktop or mobile apps.
4. **Paper Wallet -** This is also known as a physical wallet. It is a printout of the public and private keys available as a string of characters or scannable QR codes. To send crypto scan the public and private keys and crypto will be received using the public keys.

**Private key** is simply a number, picked at random. Ownership and control over the private key is the root of user control over all funds associated with the corresponding bitcoin address. The private key is used to create signatures that are required to spend bitcoins by proving ownership of funds used in a transaction. The private key must remain secret at all times, as revealing it to a third party is equivalent to giving them control over the bitcoins secured by that key. The private key must also be backed up and protected from accidental loss, since if lost it cannot be recovered and the funds secured by it are forever lost too.

**Public keys**  are used to receive cryptocurrency. Anyone can send cryptocurrency to a public key, but only the owner of the corresponding private key can spend it. A public key (K) is usually generated from the private key, using elliptic curve multiplication which is a one-way cryptographic function. 

**Cryptocurrency addresses** are derived from public keys. They are typically shorter and easier to remember than public keys. Cryptocurrency addresses are used to identify the recipient of a cryptocurrency transaction.

![privatePublicKeyImage](https://s1.coincarp.com/news/20210731/6B69A352F1867EA52E9BF5923C328C8F2367..png)


**To send cryptocurrency**, a user must have the recipient's public key or cryptocurrency address. The user then creates a transaction and signs it with their private key. The transaction is then broadcast to the blockchain network, where it is verified and added to the next block in the chain. 
**To receive cryptocurrency**, a user simply needs to provide the sender with their public key or cryptocurrency address. The sender will then create a transaction and send the cryptocurrency to the user's public key or cryptocurrency address.

Here is an example of how wallets, public/private keys, and addresses are used in a cryptocurrency transaction:

1. Alice wants to send Bitcoin to Bob.
2. Alice retrieves Bob's public key from his cryptocurrency wallet or from a public directory.
3. Alice creates a Bitcoin transaction and signs it with her private key.
4. Alice broadcasts the transaction to the Bitcoin blockchain network.
5. Bitcoin miners verify the transaction and add it to the next block in the chain.
6. Bob's Bitcoin wallet detects the incoming transaction and adds the funds to his account.

![Example_image](https://preveil.com/wp-content/uploads/2019/10/end-to-end-encryption-1024x550.png)



