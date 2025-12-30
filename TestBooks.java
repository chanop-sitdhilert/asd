import java.util.ArrayList;

public class TestBooks {

    public static void searchBookByTitle(ArrayList<Book> books, String title) {
        System.out.println("\n===== Search Result =====");
        for (Book book : books) {
            if (book.toString().contains(title)) {
                System.out.println("Found: " + book);
                return;
            }
        }
        System.out.println("Book not found: " + title);
    }

    public static void displayAllBooks(ArrayList<Book> books) {
        System.out.println("\n===== All Books =====");
        for (Book book : books) {
            System.out.println(book);
        }
        System.out.println("Total books: " + books.size());
    }

    public static void main(String[] args) {
        ArrayList<Book> books = new ArrayList<Book>();
        // 1. Create Book objects
        System.out.println("Creating books...");
        Book book1 = new Book("Introduction to Java", "John Smith", 450.0);
        Book book2 = new Book("Data Structures", "Jane Doe", 520.0);
        Book book3 = new Book();
        // 2. Add and display all books
        books.add(book1);
        books.add(book2);
        books.add(book3);
        displayAllBooks(books);
        // 3. Print publisher
        System.out.println("\nPublisher: " + Book.getPublisher());
        // 4. Search for a book
        String searchTitle = args.length > 0 ? args[0] : "Data Structures";
        searchBookByTitle(books, searchTitle);
    }

}