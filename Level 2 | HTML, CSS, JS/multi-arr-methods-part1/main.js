var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
//1.Returns a list of everyone older than 18, which is
//2.sorted alphabetically by last name, and where
//3.each name and age is embedded in a string that looks like an HTML <li> element.
function sortedOfAge(arr){
    const sorted = arr.sort(function (a, b) {
        if(a.lastName < b.lastName) {
            return -1;
        } else if (a.lastName === b.lastName) {
            return 0
        } else {
            return 1
        }
    })
    const older = sorted.filter(person => person.age > 18)
    const intoString = older.map(function (person) {
        const li = "<li>" + person.firstName + " " + person.lastName + " is "
        const li2 = person.age + "</li>"
        return  li + li2   
    })
    return intoString
}
 
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output: 
 [ 
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>" 
 ]
 */