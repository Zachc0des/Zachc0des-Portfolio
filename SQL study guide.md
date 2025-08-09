<h1> Zachc0de's SQL Study guide </h1>

<h2> How to create a Table & Query an Ip Log:
<BR><P2>Provided Below are the steps required with a summary of each function in chronological order! </P2></h2>

<h3>Step 1</h3>

<P1>CREATE TABLE IF NOT EXISTS ip_log ( <br>
id SERIAL PRIMARY KEY<BR>
timestamp TIMESTAMP  
source_ip INET <BR>
dest_ip INET <BR>
port INTERGER<BR>
protocol VARCHAR (10)<BR>
action VARCHAR (10)<BR>
bytes INTERGER <BR>
status VARCHAR (20) <BR>
-------------------------------------------------------------{CODE SUMMARY}----------------------------------------------------------
  
</P1>
<br>
<p2> --CREATE TABLE IF NOT EXISTS: Command that will create a a new database table **only if it does not already exist**.<BR><BR>
-- ip_log: Name of the table to be created.<BR><BR>
-- ID SERIAL PRIMARY KEY: PostgreSQL command that creates a speccial column for uniqely identiifying each row in a table. 
  <BR> <BR> -^- ID: Column name, SERIAL: Data type that auto-increments the value for each new row(1,2,3,4,5),
   PRIMARY KEY: Specifies that this column is the primary key of the table.
  <BR><BR>
  -- Time stamp TIMESTAMP: PostgreSQL command that creates a column for storing date and time values.<BR><BR>
  -- source_Ip INET: PostgreSQL command that creates a column for storing IP addresses in the INET data type.<BR><BR>
  -- dust_ip INET: PostgreSQL command that creates a column for storing destination IP addresses in the INET data type.<BR><BR>
  -- Port INTERGER: PostgreSQL command that creates a column for storing port numbers as integers.<BR><BR>
  -- protocol VARCHAR: PostgreSQL command that creates a column for storing protocol names as variable character strings with a maximum length of 10 characters.<BR><BR>
  -- Acion Varchar: PostgreSQL command that creates a column for storing action types (e.g., allow, deny) as variable character strings with a maximum length of 10 characters.<BR><BR>
  -- bytes INTERGER: PostgreSQL command that creates a column for storing the number of bytes transferred as an integer.<BR><BR>
  -- status VARCHAR: PostgreSQL command that creates a column for storing status messages as variable character strings with a maximum length of 20 characters.<BR><BR>
  
  
  
  
  



  




</p2>
