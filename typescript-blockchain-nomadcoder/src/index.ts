import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }

    static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString()
}

const genesisBlock: Block = new Block(0, "QWE123EGVC76@", "", "Hello", 123456);

const blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLastestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const lastestBlock = getLastestBlock();
    const newIndex = lastestBlock.index + 1;
    const newTimeStamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, lastestBlock.hash, newTimeStamp, data);
    return new Block(newIndex, newHash, lastestBlock.hash, data, newTimeStamp);
}

console.log(blockchain);