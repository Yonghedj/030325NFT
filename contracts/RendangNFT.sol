// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract RendangNFT is ERC721, Ownable {
    using Strings for uint256;

    string private baseURI;

    constructor(string memory _baseURI) ERC721("RendangNFT", "RNDG") Ownable() {
        baseURI = _baseURI;
    }

    function mintNFT(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "NFT tidak ditemukan!");
        return string(abi.encodePacked(baseURI, tokenId.toString(), ".json"));
    }
}
