# DB_Assignment_2

***
## Task 1 - investigation  
***
## Task 2 - Bloom filters  


1. What is a bloom filter?

A bloom filter is a data structure that tells you in a quick and memory-efficent way that if an element is present in a set.
its based around a Bit Array of a set m length.
The bloom filter must have a set of k hashfunction wich hashes k set of times, and changes the value in the m array element to 1 instead of 0, this way we have a indeicatier were if there is a possibolity that the filter is element is there.
With a propbalibty we can now hash a given String etc. check if the m array maybe contains the element in a quick way with running it though the k number of hashfucntion to get the element indexs - if the elements are 1 we can now determine that the String propbali is in our set.


2. What is an advantage of bloom filters over hash tables?

Bloom filter has way less overhead than hash tables. Each element in other kind of data structures needs x number of elements stored, were bloom filter dosnt store the elements themself but see if the element is present, and is used to check if the element is not presenet with its no false negatives.

3. What is a disadvantage of bloom filters?

Bloom filter has a disadvantage of probability of false positives, which mean that the algorythme can determine that the element you are searching for in the bloom filter is there without being there. 
This is becuse there is a possibolity that the hashfunctions k has already hashed element in array m and set the index to 1 so we get a false positive. 
The probability can be determinted by a mathematical equation that takes you m array size and m hash function into consideration.
The bloom filter has no prior knowledge to which element has set which bits and there for cannot give any suggestions and only give us a yes or no anwser to if the the element is present in the bloom filter.

4. Using your language of choice, implement a bloom filter with add and

check functions. The backing bit-array can simply be a long (64 bit
integer).

5. If you are to store one million ASCII strings with an average size of 10

characters in a hash set, what would be the approximate space consumption?
Starting from a String. String defines:

Object header - 8 bytes
long serialVersionUID - 8 bytes
int hash - 4 bytes + 4 bytes padding
char[] value (set to a char[10] in your case) - 8 bytes for reference
ObjectStreamField[] serialPersistentFields = new ObjectStreamField[0] - 8 bytes for reference
char[10] defines:

Object header - 8 bytes
int length - 4 bytes
char x10 - 2 bytes * 10 = 20 bytes
ObjectStreamField[0] defines:

Object header - 8 bytes
int length - 4 bytes + 4 bytes padding
Total for a single String with length 10: 88 bytes

Total for 1.000.000 Strings with length 10: 88000000 bytes.

HashSet defines:

Object header - 8 bytes
long serialVersionUID - 8 bytes
Object PRESENT - 8 bytes
HashMap<E, Object> map - 8 bytes
HashMap defines (in Java 8) (ignoring things that are created on demand, like EntrySet):

Object header - 8 bytes
long serialVersionUID - 8 bytes
int DEFAULT_INITIAL_CAPACITY - 4 bytes
int MAXIMUM_CAPACITY - 4 bytes
int TREEIFY_THRESHOLD - 4 bytes
int UNTREEIFY_THRESHOLD - 4 bytes
int MIN_TREEIFY_CAPACITY - 4 bytes
int size - 4 bytes
int modcount - 4 bytes
int threshold - 4 bytes
float DEFAULT_LOAD_FACTOR - 4 bytes
float loadFactor - 4 bytes
Node<K, V>[] table - 8 bytes
Node defines:

Object header - 8 bytes
int hash - 4 bytes + 4 bytes padding
K key - 8 bytes
V value - 8 bytes
Node<K, V> next - 8 bytes
Node<K, V>[] should have a size of 2048, if I remember how HashMap works. So it defines:

Object header - 8 bytes
int length - 4 bytes + 4 bytes padding
Node<K, V> reference * 2048 - 8 bytes * 2048 = 16384 bytes.
So the HashSet should be:

32 bytes for just HashSet
64 bytes for just HashMap
40 bytes per Node<K, V> inside Node<K, V>[] * 1000000 nodes = 40000000 bytes
16400 bytes for Node<K, V>[] inside the HashMap
Total: 40016496 + 88000000 = 128016496

Informatiomn taken from https://stackoverflow.com/questions/24253710/java-object-memory-size-of-a-set-of-strings#:~:text=HashSet%20defines%3A,Object%20PRESENT%20%2D%208%20bytes post.

6. The following equation gives the required number of bits of space per

inserted key, where E is the false positive rate.
b = 1.44log2(1/E) (1)


7. How many bits per element are required for a 1% false positive rate?

9.44log2(1/0.01) = 9.567152913275604 bits

8. How many bits per element are required for a 5% false positive rate?

10.44log2(1/0.05) = 6.2235764566378027 bits

9. If you are to store one million ASCII strings with an average size of 10 characters in a bloom filter, what would be the approximate space consumption, given an allowed false positive rate of 5%?.

11.44log2(1/0.05) = 6.2235764566378027 bits pr element
12.2235764566378027 * 10 = 62.2357645664
62.2357645664 * 1000000 = 62235764.5664


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
  
![foto](https://github.com/RasmusLynge/DB_Assignment_2/blob/main/tree/tenwords.JPG)

Recomending:  
https://people.ok.ubc.ca/ylucet/DS/Huffman.html  
https://www.dcode.fr/huffman-tree-compression  

***
## Task 4 - Map and Reduce  
[JavaScript file can be found here](https://github.com/RasmusLynge/DB_Assignment_2/blob/main/Untitled-1.js)
***
