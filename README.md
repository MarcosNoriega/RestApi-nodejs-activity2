# Endpoint

### **1- Get all authors**

method http: GET

URL: http://localhost:3000/api/authors

### **2- Get all books with the author**

method http: GET

URL: http://localhost:3000/api/books

### **3- Add an author**

method http: POST

URL: http://localhost:3000/api/author/create

request body:

    {
        "name": "Julio",
        "lastname": "Cortazar"
    }  

### **4- Add a book**

method http: POST

URL: http://localhost:3000/api/book/create

request body:

    {
        "name": "El sabueso de los Baskerville",
	    "authorId": "1"
    }

### **5- Modify an author**

method http: PUT

URL: http://localhost:3000/api/author/update/{id}

request body: 

    {
	    "name": "Arthur Conan",
	    "lastname": "Doyle"
    }

### **6- Modify a book**

method http: PUT

URL: http://localhost:3000/api/book/update/{id}

request body: 

    {
	    "name": "Las aventuras de Sherlock Holmes",
	    "authorId": "1"
    }

### **7- Delete a author**

method http: DELETE

URL: http://localhost:3000/api/author/delete/{id}


### **8- Delete a book**

method http: DELETE

URL: http://localhost:3000/api/book/delete/{id}







 
        

