# DB_Assignment_2

***
## Task 1 - investigation  
***
## Task 2 - Bloom filters  
***
## Task 3 - Huffman coding  
#### 1. Generate Huffmann Code (and draw the Huffmann Tree) based on the following string: “beebs beepps!!!!! their eerie ears hear pears”  
 char        | bit           | 
| ------------- |:-------------:| 
| e      | 01 | 
| (space)| 101 | 
| !      | 000 | 
| r      | 001 | 
| b      | 1001 | 
| s      | 1111 | 
| e      | 1100 | 
| i      | 1000 | 
| a      | 1101 | 
| t      | 11100 | 
| h      | 11101 | 
#11
![photo](https://github.com/RasmusLynge/DB_Assignment_2/blob/main/tree/beep.JPG)
#### 2. How many bits is the compressed string? How many bits is the raw ASCII string?  
1001010110011111101100101011100110011110000000000000001011110011101011000001101010100110000110101110100111111011110101110100110111000111010011111 <-- 145 bits?  
45 tegn * 8 bits = 360 bits.   

#### 3. Compress “pete is here” with the Huffmann tree from before.  
110001111000110110001111101111010100101  
  
#### 4. Write your own 10 word sentence. Generate the Huffmann Code (a new Huffmann Tree), and write a new compressed message (ie. in binary). Swap with one of your fellow students, and decompress each other’s message.  

tekst: "hej! det her kommer nok til at tage lidt tid "
binary: 110100010001000011011001001101011101000111011011110011101111101111000111011011000011101111000110111001111101000010101101000010001001011111111001001101011011100100101

 char        | bit           | 
| ------------- |:-------------:| 
| (space) | 000 | 
| e | 001 | 
| t | 101 | 
| d | 1001 | 
| i | 1100 | 
| a | 0000 | 
| h | 11010 | 
| j | 00010 | 
| ! | 00011 | 
| r | 11011 | 
| k | 11100 | 
| o | 11101 | 
| m | 11110 | 
| n | 10000 | 
| l | 11111 | 
| g | 10001 | 

[foto](https://github.com/RasmusLynge/DB_Assignment_2/blob/main/tree/tenwords.JPG)
***
## Task 4 - Map and Reduce  
[JavaScript file can be found here](https://github.com/RasmusLynge/DB_Assignment_2/blob/main/Untitled-1.js)
***
