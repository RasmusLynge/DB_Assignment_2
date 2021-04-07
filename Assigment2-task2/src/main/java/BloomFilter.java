import static com.sangupta.murmur.Murmur3.hash_x86_32;

public class BloomFilter {
    private int exceptedToBeStored;
    private float falsePositiveProbability;
    private int size, numberOfHash;
    private boolean[] bits;

    public BloomFilter(int exceptedToBeStored, float falsePositiveProbability) {
        this.exceptedToBeStored = exceptedToBeStored;
        this.falsePositiveProbability = falsePositiveProbability;
        size = getSize(exceptedToBeStored, falsePositiveProbability);
        numberOfHash = getHashCount(size, exceptedToBeStored);
        bits = new boolean[size];
    }


    public void add(String value) {
        long[] num  = new long[numberOfHash];
        for (int i = 0; i < numberOfHash; i++) {
            long hashed = hash_x86_32(value.getBytes(),value.length(), i) % size;
            num[i] = hashed;
            bits[(int) hashed] = true;
        }
    }


    public boolean check(String value) {
        for (int i = 0; i < numberOfHash; i++) {
            long hashed = hash_x86_32(value.getBytes(), value.length(), i) % size;
            if (bits[(int) hashed] == false) return false;
        }

        return true;
    }


    public int getSize(int exceptedToBeStored, float falsePositiveProbability) {
        return (int) (-(exceptedToBeStored * Math.log(falsePositiveProbability)) / (Math.pow(Math.log(2), 2)));
    }

    public int getHashCount(int size, int exceptedToBeStored) {
        return (int) ((size / exceptedToBeStored) * Math.log(2));
    }

    public static void main(String[] args) {
        String[] toAdd = {"kage","manden","er","færdig"};
        String[] toCheck = {"kage","manden","hus","er","forbi","færdig"};
        BloomFilter bloomFilter = new BloomFilter(64, (float) 0.05);
        for (String s : toAdd) {
            bloomFilter.add(s);
        }
        for (String s : toCheck) {
            System.out.println(s+" is in? "+bloomFilter.check(s));
        }
    }
}
