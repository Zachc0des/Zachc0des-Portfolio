<h1> Zachc0de's SQL & Python Automation Study guide </h1>
<h1> Understanding Task Automation </h1>
<h2>Syntax Refrence </h1>
<h2>Tasks</h2>
<p1>add hyperlink/ short curt to each section below </p1>
<h3> How to create a Table & Query an Ip Log:
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

<h3> Step 2</h3> 
<p1> /d ip_log; </p1> 
<Br>

<h3> Step 3</h4>
<p1>INSERT INTO ip_log (timestamp, source_ip, dest_ip, port, protocol, action, bytes, status) VALUES<br>
('2025-01-15 08:23:14', '192.168.1.101', '8.8.8.8', 53, 'UDP', 'ALLOW', 64, 'SUCCESS'),<br>
('2025-01-15 08:23:15', '192.168.1.102', '172.217.12.46', 443, 'TCP', 'ALLOW', 1024, 'SUCCESS'),<br>
('2025-01-15 08:24:32', '10.0.0.5', '192.168.1.200', 22, 'TCP', 'DENY', 0, 'BLOCKED'),<br>
('2025-01-15 08:25:01', '192.168.1.103', '54.230.87.12', 80, 'TCP', 'ALLOW', 2048, 'SUCCESS'),<br>
('2025-01-15 08:26:45', '172.16.0.10', '192.168.1.101', 3389, 'TCP', 'DENY', 0, 'BLOCKED')<br>
</p1>
<br>
<h3> Step 4</h3>
<P1>SELECT 'DATA INSERTION VERIFICATION' as check_type, <br>
  COUNT(*) as total records FROM  ip_log;
</P1>

<h3>Step 4 </h3>

<p1> </p1><br>

-------------------------------------------------------------{CODE SUMMARY STEP #1}--------------------------------------------------
  
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
  -- Action Varchar: PostgreSQL command that creates a column for storing action types (e.g., allow, deny) as variable character strings with a maximum length of 10 characters.<BR><BR>
  -- bytes INTERGER: PostgreSQL command that creates a column for storing the number of bytes transferred as an integer.<BR><BR>
  -- status VARCHAR: PostgreSQL command that creates a column for storing status messages as variable character strings with a maximum length of 20 characters.<BR><BR>
  -------------------------------------------------------------{Step 2}----------------------------------------------------------<BR><BR>
  
  -- /d ip_log; This command will display the structure of the table ip_log, showing the columns and their data <BR>
  
  -------------------------------------------------------------{Step 3}----------------------------------------------------------<BR><BR>

  -- INSERT INTO IP_LOG: Command that will insert new rows into the ip_log table.<br><br>
  -- (timestamp, source_ip, dest_ip, port, protocol, action, bytes, status): Specifies the columns into which data will be inserted.<br><br>
  -- VALUES: SQL Keyword that separates the colum names from the actual data, Everything after this keyword is the data that will be inserted into the table.<br><br>
  ** The data is pulled from a a practical example of an IP log, which includes timestamps, source and destination IP addresses, ports, protocols, actions taken, bytes transferred, and     status messages.<br><br>

   -------------------------------------------------------------{Step 4}----------------------------------------------------------<BR><BR>

   -- (SELECT 'DATA INSERTION VERIFCATION' as check type;   --SELECT command that will retrieve data from the ip_log table<br>
   -- SELECT COUNT(*) FROM ip_log;); This command will count the number of rows in the ip_log table to verify that data has been inserted correctly.<br><br>

 -------------------------------------------------------------{Step 5}----------------------------------------------------------<BR><BR>

 --

  
  
  
  
  
  



  




</p2>
