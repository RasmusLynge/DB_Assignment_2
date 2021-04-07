public interface BloomFilterInterface<T> {
    void add(T value);

    boolean MightContain(T value);
}
