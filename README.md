
![alt tag](https://github.com/dominionenterprises/blessed-charlotte/blob/master/download.png)  ![alt-tag](https://github.com/dominionenterprises/blessed-charlotte/blob/master/charles.jpg)

# DE HackU5 Student Repository

Javascript code base used to scrape data from a designated website.

This Chrome plug-in is under active development and will continue to be modified and improved over time. The current release is an "alpha."

### Requirements:

Google Chrome web browser and internet access.

### Usage:

Plug-in users can specify what fields they want the plug-in to scrape for and then the user has the ability to export the scraped data into a .csv file.

###Charlotte API
Method        | Parameters    | Description
------------- | ------------- | ------------
crawlTo       | url: string | Fetches a webpage. <br> Returns a Promise.
mapSite       | url: string, <br> maximum: number | Gets all the urls on a websiteup to the inputed maximum <br> Returns a Promise.
isvalidURL    | url: string | Returns True if the string is a valid URL.
isSameOrigin  | url1: string, <br> url2: string | Returns True if two URLs are from the same origin.


###Spider API
Method        | Parameters    | Description
------------- | ------------- | ------------
capture       | selector: string | Gets information from an element specified by the selector. <br> Does not return.
export        | as: string | Export information to a particular format.
