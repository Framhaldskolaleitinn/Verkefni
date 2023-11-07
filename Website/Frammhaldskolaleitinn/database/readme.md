# DATABASE

---

### Design process

- Determine the purpose of your database    

  - This helps prepare you for the remaining steps.

- Find and organize the information required     

  - Gather all of the types of information you might want to record in the database, such as product name and order number.

- Divide the information into tables    

  - Divide your information items into major entities or subjects, such as Products or Orders. Each subject then becomes a table.

- Turn information items into columns    

  - Decide what information you want to store in each table. Each item becomes a field, and is displayed as a column in the table. For example, an Employees table might include fields such as Last Name and Hire Date.

- Specify primary keys    

  - Choose each table’s primary key. The primary key is a column that is used to uniquely identify each row. An example might be Product ID or Order ID.

- Set up the table relationships    

  - Look at each table and decide how the data in one table is related to the data in other tables. Add fields to tables or create new tables to clarify the relationships, as necessary.

- Refine your design    

  - Analyze your design for errors. Create the tables and add a few records of sample data. See if you can get the results you want from your tables. Make adjustments to the design, as needed.

- Apply the normalization rules    

  - Apply the data normalization rules to see if your tables are structured correctly. Make adjustments to the tables, as needed.

---

### Determine the purpose of your database 

#Uppfæra

Database-ið er gert til þess að sýna lista af skólum, brautum og áföngum. Einnig þarf það að halda upplýsingum um kynjahlutföll á brautum/skólum, hversu margir fara í HR/HÍ eftir nám, klára nám o.s.frv.

### Find and organize the information required

- skólanafn
  
- kynjahlutföll skóla
  - heildarnemendur
  - karlsnemendur
  - kvennemendur
- prósenta sem fara í háskóla
  - heildarnemendur
  - margir í HR/HÍ úr X Skóla
- Prósenta sem klára skóla (dropout rate)
  - heildarnemendur
  - útskriftarnemendur
- Meðal útskriftartími
  - heildar útskrifartími alla nemanda
  - heildarnemendur
- 



---

# ChatGPT

Designing a database is a critical step in building any data-driven application. A well-designed database ensures data integrity, efficiency, and scalability. Here's a step-by-step tutorial on how to design a database:

1. Define the Purpose and Requirements:

Understand the purpose of your database. What problem does it solve?
List the data requirements, including what data needs to be stored, retrieved, and how it will be used.
2. Identify Entities and Attributes:

Identify the main entities (objects) in your database. These are often nouns like "Customer," "Product," or "Order."
For each entity, list its attributes (fields) and their data types. For example, a "Customer" entity might have attributes like "Name," "Email," and "Address."
3. Create an Entity-Relationship Diagram (ERD):

Visualize the relationships between entities using an ERD. Common relationships include one-to-one, one-to-many, and many-to-many.
Use tools like draw.io, Lucidchart, or ERD software to create the diagram.
4. Normalize Your Data:

Apply the principles of database normalization to reduce data redundancy and improve data integrity. Common normal forms include 1NF, 2NF, and 3NF.
5. Define Primary Keys:

Choose a primary key for each entity. It should be a unique identifier for that entity.
You can use a single field (e.g., a Customer ID) or a composite key (multiple fields).
6. Define Relationships:

Establish relationships between entities using foreign keys. A foreign key in one table refers to the primary key in another table.
Determine the cardinality of each relationship (one-to-one, one-to-many, or many-to-many).
7. Set Up Indexes:

Identify fields that are frequently used in search and retrieval operations. These fields should have indexes for faster query performance.
8. Create Tables:

Using your ERD, create the actual database tables in your database management system (e.g., SQL, NoSQL).
Define data types, constraints, and relationships in your SQL scripts or database modeling tool.
9. Implement Data Integrity Rules:

Enforce data integrity using constraints like UNIQUE, NOT NULL, and CHECK constraints.
Use triggers and stored procedures to implement custom business rules.
10. Populate Data:

Insert initial data into your tables. This can be done manually, through data import, or through your application.
11. Test Your Database:

Perform extensive testing to ensure data integrity and reliability.
Test CRUD operations (Create, Read, Update, Delete) and edge cases.
12. Optimize Performance:

Continuously monitor and optimize your database for performance. This may involve indexing, query optimization, and schema adjustments.
13. Document Your Database:

Create documentation that describes the schema, relationships, and any business rules.
14. Back Up and Secure:

Regularly back up your database and implement security measures to protect your data.
15. Maintain and Evolve:

As your application evolves, the database design may need to change. Regularly review and update your database design to accommodate new requirements.
Remember that database design is an iterative process. It's essential to involve stakeholders and users throughout the design process to ensure that the database meets their needs. Additionally, consider the scalability and future expansion of your database as your application grows.
