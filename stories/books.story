


Meta:


Narrative:
In order to 
As a 
I want to 

GivenStories: 

Lifecycle:

Before:


After:



Scenario: Books link should be present

Meta:


Given Web home page is opened
When Web user clicks the element books
Then Web element title should have text Books

Examples:

Scenario: Should be able to create a new book

Meta:


Given Web home page is opened
When Web user clicks the element books
When Web user clicks the element newBook
When Web user sets value 123 to the element bookId
When Web user sets value BDD Assistant to the element bookTitle
When Web user sets value Viktor Farcic to the element bookAuthor
When Web user sets value Open source BDD stories editor and runner to the element bookDescription
When Web user clicks the element saveBook
Then Web element book123 is present

Examples:

Scenario: Should be able to display book details

Meta:


Given Web home page is opened
When Web user clicks the element books
When Web user clicks the element book1
Then Web element bookId should have value 1
Then Web element bookTitle should have value TDD for Java Developers
Then Web element bookAuthor should have value Viktor Farcic
Then Web element bookDescription should have value Cool book!

Examples:
