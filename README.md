# README

## CONCEPT :

This is a fun, silly website for calculating how big of a whale (big spender) someone is based on what characters they own or pulled in the game Genshin Impact. 

## CODE DESIGN :

There are 4 components : App, FilteredList, DisplayList, Aggregator

### App:

The main component, contains a FilteredList and an Aggregator component.

App contains a dictionary of the game characters as objects in its state. Each character object has a value of name, weapon, element, star, whalelevel, order, and image. 

This dictionary allows for easy access to a specific character to update its display order and amount of copies owned. App turns the dictionary into a list to give to FilteredList as a prop and to Aggregator through functions. App allows Aggregator to access and modify the dictionary in App by passing the functions addToList(), remove(), and decrease() as props to Aggregator. 

### FilteredList:

Contains filtering/sorting methods for the character selection area.Also contains the bootstrap navbar for selecting filters, and a DisplayList component for displaying the characters. 

### DisplayList:

Maps each character from the list given to it as a prop from FilteredList to an HTML element for render. Allows user to add characters to the owned section through a + button. DisplayList updates the dictionary stored in App's state through the addToList() function when the user presses the + button.

### Aggregator:

Displays owned characters section and computes total whale level. Maps owned characters stored in App.js dictionary to an HTML element for render. 

Allows user to change amount of and remove characters from owned section through +, -, and Remove buttons.When the user presses the buttons, Aggregator updates the dictionary stored in App's state through the addToList(), decrease(), and remove() functions respectively. The functions are pased as props to Aggregator.

### Aggregator Section Display Order:

Order of characters displayed in the Aggregator is managed through the order values of each character object. Before displaying, the list of characters is sorted by decreasing order value so that the latest character is displayed at the top of the list. Order value represents only the relative placement of characters in the list, it is not an index. 

Each time a character not currently owned is added through the + button from DisplayList, it is updated to have the highest order number. The order number will be 1 higher than the last order number given to any character, which is stored in App's state.