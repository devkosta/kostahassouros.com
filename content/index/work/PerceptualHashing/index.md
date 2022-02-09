---
title: "Perceptual Hashing"
url: "https://github.com/devkosta/image-match"
date: "2021-12-02" 
---
Developed an application to measure the similarity between two images using TypeScript, React, and NodeJS.

<br/>

Perceptual image hashing is a family of algorithms that generate content-based image hashes. Unlike cryptographic hashes, perceptual hashes are designed not to change much when an image undergoes minor modifications such as compression, colour correction, and brightness. Therefore, these algorithms have been found helpful in detecting redundant images, performing reverse image search, and flagging/filtering inappropriate imagery by comparing image hashes with a dataset of known perceptual hashes. 

<br/>

In my application, I have implemented two different methods of perceptual hashing: an average hash and a variation of the popular pHash algorithm, in which are explained in detail at [HackerFactor](https://www.hackerfactor.com/blog/index.php?%2Farchives%2F432-Looks-Like-It.html).