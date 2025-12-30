
public class Book {
    final static String publisher = "KKU Press"; // Publisher name
    private String title;     // Title of the book
    private String author;    // Author name
    private double price;     // Price in baht

    // Constructor to initialize a Book object
    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
   
    }

    public Book() {
        this.title = "Unknown Title";
        this.author = "Unknown Author";
        this.price = 0.0;
    }

    @Override
    public String toString() {
        return  "Title: [title], Author: [author], Price: [price]"
                .replace("[title]", title)
                .replace("[author]", author)
                .replace("[price]", String.format("%.2f", price));
    }

    public static String getPublisher() {
        return publisher;
    }
}
