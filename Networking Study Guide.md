
<h1>Networking study Guide</h1>
<h3>Table of contents</h3>
<h4>Standards & Concepts</h4>
<p1>Osi & TCP/IP Models<br>
  Network Protocols<br>
  Network Services
  <h4>Adressing & Subnetting</h4>
 <P1>Ipv4<br>
  Ipv6<br>
  Subnetting<br>
  Binary Conversion<br>
  </P1> 
  <h4>Network Infrastructure</h4>
   <p1>Network Devices<br>
   Network Topologies<br>
   Cablaing & Standards<br>
   Wireless Networking
  </p1> 
  <h4>Network Operations</h4>
  <p1>Network Documentaiton<br>
  Peformance Monitoring<br>
  Device Configuration<br>
  <h4>Network Security</h4>
  <p1> Security Fundamentals <br>
  Acess Control <br>
  Security Devices 
  </p1>
  <h4> Network Troubleshooting </h4>
  <P>Troubleshooting Methodology<br>
  Common Network Issues<br>
  Network Tools<br>
  Layer-specific Troubleshooting                                 
  </P>
    
  </h4>
  
    
  </p1>

<h2>The Seven layers of Osi Model</h2>

<h3>Layer 7:Application</h3>
  <h4>The closest layer to the end user. Provides network services directly to applications and handles user interface and application-specific networking functions.</h4>
  <p1>This is where network applications and their protocols operate. It is what users directly interact with- web browsers, email clients, and file transfer programs. Protocols include HTTP/HTTPS</p1>
  <h5> Example: HTTP/HTTPS, FTP, SMTP, DNS, Web Browsers & Email Clients </h5>
<h3>Layer 6:Presentation Layer</h3>
<h4>Handles data formatting, encryption, compression, and translation.</h4>
<p1>Ensures Data from the application is readable by the receiving system</p1>
 <h5> Example: SSL/TLS, JPEG, GIF, ASCII, Encryption & Compression </h5>
<h3>Layer 5: Session Layer</h3>
<h4> Manages communication sessions between applications.</h4>
<p1> It establishes, maintains, and terminates connections, handling things like authentication and session checkpoints for recovery2</p1>
 <h5> Example: SQL Sessions, RPC, NetBIOS, PPTP, Session Management </h5>
<h3>Layer 4:Transport Layer</h3>
<h4>Provides reliable data transfer between end systems. TCP (reliable connection-oriented) & UDP (Fast connectionless) operate here.</h4>
<p1> This layer handles segmentation, flow control, and error recovery</p1>
 <h5> Example: TCP, UDP, Port Numbers, Segmentation, Flow Control </h5>
<h3>Layer 3: Network Layer</h3>
<h4>Handles routing & forwarding of data packets between different networks, determines the best path for data to travel across networks</h4>
<p1> Responsible for routing data between different networks. IP (Internet Protocol) operates at this layer, determining the best path for data packets to reach their destination across multiple networks.</p1>
 <h5> Example:IP (IPv4/Ipv6),Routers,ICMP,OSPF,BGP </h5>
<h3>Layer 2: Data Link Layer</h3>
<h4>Provides node-to-node transfer and handles error correction from the physical layer. Creates & manages connections between adjacent network nodes</h4>
<p1>Handles communication between adjacent network nodes on the same physical network, Ethernet operates here, managing MAC addresses and ensuring reliable transmission over the physical medium </p1>
 <h5> Example: Ethernet, Wifi (802.11), Switches, MAC Addresses & PPP </h5>
<h3>Layer 1: Physical Layer</h3>
<h4> Transmits raw bit streams over physical media.</h4>
<p1>The Actual hardware cables, wireless signals, voltage levels, and timing define the electrical and physical specifications for transmitting raw bits</p1>
 <h5> Example: Cables, Fiber Optic, Radio Waves, Hubs & Electrical Signals </h5>
 <br>
  <h2> The Four Layers of TCP/IP Model</h2>
 <h3>Application Layer</h3>
 <h4>Location of operation for network applications & their protocols</h4>
 <p>
  The layer closest to the end-user & provides network services directly to applications
 </p>
 <h5>
   Examples: Web browsing (HTTP/HTTPS), Email (SMTP/POP3, File transfer (FTP), Domain name resolution (DNS), & Telnet
 </h5>
 
 <h3>Transport Layer</h3>
 <h4>Provides reliable data transfer services between applications</h4>
 <p>Handles error recovery, flow control & ensures data intergrity</p>
 
 <h5>Examples: TCP: Web browsing, email, file downloads, (reliable) <br>
  UDP: Video streaming, Online gaming, DNS queries (fast)
   
 <h3>Internet Layer</h3>
<h4> Handles the movement of packets around the network </h4>
<p1>Responsible for addressing,routing & packet fowarding across multiple networks</p1>
<h5>Examples: IP addressing (192.168.1.1), Routing between networks, Ping commands (ICMP), Finding MAC addresses (ARP)</h5>
 
 <h3>Network Access Layer</h3>
 <h4>Combines physical & data link functions</h4>
 <p1>Handles the physical transmission of data & local network addressing using MAc addresses</p1>
 <h5>Examples: Ethernet cables, Wifi connections, Network Swithces & Network interface cards</h5>
 <br>
 
 <h2>Network Protocols</h2>
 <h3>TCP:Transmission Control Protocol</h3>
 <h4> A reliable transport protocol that ensures data arrives complete and in order</h4>
<p>Almost like sending a registered letter, you get confirmation that it was delivered</p>
   <h5> Example: When downloading a file, TCP breaks it into packets, numbers them, and assembles them all correctly. If any packets are lost, TCP requests them again.
   </p>
 <h3>UDP:User Data Protocol</h3>
 <h4> A fast but unreliable transport protocol. It sends data quickly without checking if it arrived - like throwing a paper airplane across the room.
 <h5> Example: Online gaming & live video streaming use UDP because speed matters more than perfect delivery. A few lost packets won't ruin the experience. </h5>  
<h3>DHCP:Dynamic Host Configuartion Protocol</h3>
<h4>Port #67/68 | Automatically assigns IP addresses & network settings to devices when they connect to a network, eliminating manual configuration</h4>  
<p>Key Features: <br>
Automatic IP assignment <br>
Provides gateway & DNS info <br>
Prevents IP conflicts <br>
IP address lease management <br>  
</p>   
<h5> Example: You connect your phone to a coffee shop's Wi-Fi. The router's DHCP server automatically assigns your phone the IP address 192.168.1.105, along with the gateway & DNS settings- no manual setup needed</h5>     
<h3> HTTP:HyperText Transfer Protocol </h3>
<h4>Port #80 | The foundation of web communication.</h4>  
<p> Every time you visit a website, your browser uses HTTP to request & receive web pages, images & other content from web servers</p>
<h5>When you type "http://example.com" in your browser, it sends an HTTP GET request to the server, which responds with the website's HTML content. </h5>   
   <h3>HTTPS:HTTP Secure </h3>
   <h4>Port #443 | HTTP with an extra layer of security.</h4>
     <p>All data is encrypted using SSL/TLS, making it safe to send sensitive information like passwords & credit cards </p>
     <h5> Online banking websites use HTTPS (notice the padlock icon 🔒 in your browser) to ensure financial data is encrypted during transmission.
 <h3>FTP:File Transfer Protocol</h3>
 <h4>Port #21 | A protocol designed specifically for transferring files between computers.</h4>
 <p> Consider a specialized delivery service for digital files, Secure, feature-rich, needs login, uses TCP</p> 
 <h5> Example: Web developers use FTP to upload website files to web servers.<br> You can connect to       ftp://files.example.com  to download or upload files.
   <h3>TFTP:Trival File Transfer Protocol </h3>
 <h4>Port #69 | Simple no-authentication file transfer, </h4>
   <p1> mainly for network device booting using UDP</p1>
   <h5>Example: A Cisco router boots up -> sends TFTP reqeuest -> downloads its IOS firmware from server-> starts operating. No login needed, just "get firmware.bin"</h5>
 <h3>SMTP:Simple Mail Transfer Protocol </h3>
   <h4>Port #25 | The postal service of the internet  </h4>
   <p>SMTP handles sending emails from your email client to mail servers & between mail servers across the internet</p>
   <h5>Example: When you hit "Send" on an email, SMTP carries it from your email app to your mail server, then to the recipient's mail server</h5>
 <h3>DNS:Domain Name System </h3>
 <h4> Port #53 | The Internets Phonebook</h4>  
 <p>It translates human-readable domain names (like google.com) into IP addresses (172.217.164.110) that computers can understand</p> 
   <h5>Example: When you type wwww.google.com, DNS servers look up & return Google's IP address so your browser knows where to connect</h5>
 <h3>SSH:Secure Shell  </h3>
 <h4>Port #22 | A secure way to remotely access & control another computer over a network.</h4>  
 <P>It's like having a secure, encrypted remote control for a computer </P>
 <h5> Example: System administrators use SSH to securely log into servers from anywhere in the world, as if they were sitting right in front of the server </h5>
 <h3>IMAP:Internet Message Access Protocol</h3>
 <h4>Port #143/993 | Access & manage your email directly on the mail server  </h4>
  <p>Emails stay on the server & Sync all your devices<br>
  Key Features:<br>
  Emails stored on server<br>
  Multi-device synchronization<br>
  Folder management on  server<br>
  Read/unread status syncs           
  </p>
 <h3>POP3 </h3>
 <h4> Port #110/995 | POP3 downloads emails from the server to your device  </h4>
 <p>Key Features:<br>
 Download emails locally <br>
 Usually deletes from the server<br>
 Works offline after download <br>
 Single device focused  
 </p>  
 <h5>Example: Your email client downloads all new messages to your computer at 9 AM. After download, the messages are removed from the server & only exist on that computer   
 <h3>SNMP: Simple Network Managment Protocol </h3>
 <h4> Port #161/162 | Moniotring & Managing network devices.</h4>
   <p>
     Collecting information about network performance, device status & alerts administrators use<br>
     Key Features:<br>
     Device monitoring & managment<br>
     Performance data collection <br>
     Trap notifications for alerts <br> 
     Remote device configuration <br>
   </p> 
 <h5>Example: A network administrator uses SNMP to monitor all routers in a company. When Router #3's CPU usage hits 95%, SNMP sends an automatic alert so the admin can investigate before users experience problems</h5>
 <h3>Telnet </h3>
 <h4> Port #23 | Remote command-line access to other devices over a network.</h4>
   <p>Largely deprecated due to security issues<br>
   Key Features:<br>
     Remote terminal access<br>
     Text-based commands<br>
     No encryption (insecure)<br>
     Replaced by SSH in modern use</p>
     <h5>Example: An admin uses telnet 192.168.1.1 to connect to a router's command line from their desk. They can type commands to configure the router remotely. </h5>
   </p>
<h2>Network Services</h2>
<h3>DHCP configuartion & troubleshooting</h3>
<h3> DNS resoultion process</h3>
<h3> NAT/PAT operations</h3>
<h3>Quality of Service (Qos) basics</h3>
<h3>Network Time Protocol (NTP)</h3> 
<h1>Addressing & Subnetting</h1>
<h2>IPv4 Address Structure </h2>
<p> IPv4 Addresses are divided into classes based on their first octet:<br>
(One of Four 8-bit numbers in an IPv4 address separated by dots)</p>   
<h3>Class A: Very large networks (16M hosts)</h3>
  <P>
  1st Octet Range: 1-126 <br>
  Default Subnet mask: 255.0.0.0(/8) <br>
  Network Bits: 8 bits<br>
  Host Bits: 24 Bits <br>
  Usage: Large networks (16.7M hosts) <br>
</P>   
<h3>Class B: Meduim networks (65k hosts) </h3>
   <p>
     1st Ocet Range: 128-191 <br>
    Default Subnet mask:255.255.0.0 <br>
    Network Bits: 16 bits <br>
    Host Bits: 16 bits <br>
    Usage: Medium networks (65,534 hosts)<br>
   </p>
<h3>Class C: Small networks (254 hosts)</h3>
  <p>1st Ocet Range: <br>
    Default Subnet mask: 255.255.255.0 <br>
    Network Bits: 24 bits <br>
    Host Bits: 8 bits <br>
    Usage: Small networks (254 hosts) <br>
  </p>
<h3>Class D: Multicast groups</h3>
   <p>1st Ocet Range: 224-239 <br>
    Default Subnet mask: N/A <br>
    Network Bits:N/A <br>
    Host Bits:N/A <br>
    Usage: Multicast groups <br>
   </p>
<h3>Class E: Experimental/Reserved</h3>
  <p>
    1st Ocet Range:240-255 <br>
    Default Subnet mask:N/A <br>
    Network Bits:N/A<br>
    Host Bits: N/A <br>
    Usage: Experimental/Reserved <br>
  </p>
<h2>Ipv6 Address Structure</h2>
   <h3>Global Unicast</h3>
   <P>
     Prefix: 2000::/3<br>
     Network Bits:48-64 bits<br>
     Usage: Public Internet addresses<br>
   </P>
    <h3>Link Local</h3>
   <P>
     Prefix: fe80::/10<br>
     Network Bits:64 bits<br>
     Usage: Local network segment only<br>
   </P>
    <h3>Unique Local</h3>
   <P>
     Prefix: fc00::/7<br>
     Network Bits:48 bits<br>
     Usage: Private network<br>
   </P>
    <h3>Multicast</h3>
   <P>
     Prefix: ff00::/8<br>
     Network Bits: Varies <br>
     Usage: One-to-many communication<br>
   </P>
    <h3>Loopback</h3>
   <P>
     Prefix: ::1/128<br>
     Network Bits: 128 bits<br>
     Usage: Local loopback<br>
   </P>
   
<h2>Subnetting </h2>
<h3>Core Concepts</h3>
<h5>The practice of dividing a network into smaller, more manageable sub-networks (subnets)</h5>
<p>Key Address Types<br>
CIDR Notation <br>
Block size trick<br>
Quick Reference /24 to /30 <br>
The Powers of 2 <br>
The Magic Formula Usable Hosts = 2ⁿ - 2 <br>
  
</p>
<h5>Example:Dividing a large apartment building into separate floors & apartments | Improving network peformance & enhancing security</h5>

<h3>Key Address Types</h3>

<h4>Network Address</h4>
<p>The first address in any subnet where all host bits are set to 0. This identifies the network itself & cannot be assigned to a device.</p>
<h4>Broadcast Address</h4>
<p>The last address in any subnet where all host bits are set to 1. Used to send messages to all devices on the network simultaneously</p>
<h4>Usable Host Addresses</h4>
<p>All adresses between the network & brodacast addresses. These can be assigned to actual devices like computers, servers & routers</p>

<H4>CIDR Notation</H4>
<p>Classless Inter-Domain Routing; Notation is a compact way to specify an IP address and its associated network mask. It's written as an IP address followed by a slash & a number, like:192.168.1.0/24<br>

192.168.1.0./24 means 24 network bits<br>
The number after "/' tells you how many bits are "locked" for the network<br>
Higher number + more network bits = fewer hosts
</p>

<h5> *Higher CIDR number = More network bits locked = Fewer hosts available* <br>
/16 = Large network (65k + hosts)- Good for large organizations<br>
/24 = Medium network (254 hosts) - Common for small offices/departments<br>
/30 = Tiny network (2 hosts) - Perfect for point-to-point links between routers  
</h5>

<h4>Quick Reference /24 to /30:</h4>
<p>
/24: 254 hots (typical small network)<br>
/25: 126 hosts (half of /24)<br> 
/26: 62 hosts (quarter of /24)<br>
/27: 30 hosts (small office)<br>
/28: 14 hosts (tiny network)<br>
/29: 6 hosts (very small)<br>
/30: 2 hosts (point-to-point links)  
</p>

<h4>The Magic Formula:</h4>
<p>
  Usable Hosts = 2ⁿ - 2<br>
  (where n = number of host bits)<br><br>
  We subtract 2 because one address is the network and one is the broadcast address
</p>


<h4>Block Size Trick for Subnetting:</h4>

<h4> Formula: Block Size = 256 - Subnet - Octet</h4>

<p>
  The fastest way to find network ranges & subnet boundaries<br>
  1. Find the "interesting octet"(the one that's NOT 0 or 255 in the subnet mask)<br>
  2. Subtract that number from 256<br>
  3. The result is your block size - count by this number to find all subnets <br>
</p>



<h4>Powers of 2 in Subnetting:</h4>
<p>IP addresses are binary, each bit can be  either 0 or 1, giving us 2 possibilities per bit<br>
Every calculation in subnetting is based on powers of 2
<h5> The Two Essential Formulas</h5>
<p> Number of Addresses:<br>
2n: where n = number of host bits<br><br>
  
Usable Hosts:<br>
2n - 2: Subtract 2 (for network & broadcast addresses)

</p>

<h4>Subnet Mask Values to Memorize</h4>

<p1>Binary: 00000000:<br>
Decimal: 0<br>
Key Pattern: All host bits  
</p>

<p1>Binary: 10000000
Decimal: 128<br>
Key Pattern: Split in Half</p1>

<p1>Binary: 11000000:<br>
Decimal: 192<br>
Key Pattern: Split in quarters</p>

<p1>Binary: 11100000:<br>
Decimal: 224<br>
Key Pattern: Split in eighths</p>

<p1>Binary: 11110000:
Decimal: 240 <br>
Key Pattern: 16 addresses</p>

<p1>Binary: 11111000:<br>
Decimal: 248<br>
Key Pattern: 8 addresses</p>

<p1>Binary: 11111100:<br>
Decimal: 252<br>
Key Pattern: 4 addresses</p>

<p1>Binary: 11111111:<br>
Decimal: 255<br>
Key Pattern: All network bits</P>

<h2>Binary Conversion</h2>

<h4> Conversion Refrence</h4>
<p>
Character: A <br>
Decimal: 65 <br>
Binary: 01000001
</p>

<p>
Character: B<br>
Decimal: 66<br>
Binary:01000010  
</p>

<p>
Character: 0<br>  
Decimal: 48 <br>
Binary: 00110000  
</p>

<p>
Character: 1 <br>
Decimal: 40 <br>
Binary:00110001 
</p>

<h5>
  Binary uses only 0s & 1s to represent data.<br>
  Each Character has a decimal ASCII value that converts to an 8-bit number.<br>
  Each Bit position represents a power of 2: 128,64,32,16,8,4,2  
</h5>

<h2>Network infrastructure</h2>

<h3>Network Devices</h3>
<p>Network devices are hardware components that facilitate communication and  transfer data across networks. <br><br>
  
These devices operate at different layers of the OSI model and serve specific functions in network infrastructure: 

<h4>Switches: (Layer 2/3) </h4>
<p>
Function: Connect devices within a LAN and forward data based on MAC addresses (Layer 2) or IP addresses (Layer 3).<br><br>
Key Features: VLAN support, QoS, PoE (Power over Ethernet), port-security<br><br>
Example: Cisco Catalyst 9300 Series - Enterprise-grade multilayer switch supporting up to 48 ports, PoE+, and advanced security features like MACsec encryption
</p>

<h4> Routers: (Layer 3)</h4>
<p>
Function: Connect different networks & route traffic between them using IP addresses & routing protocols.<br><br>
Key Features:  Routing Protocols (OSPF,EIGRP, BGP), NAT, ACLs, VPN support<br><br>
Example: Cisco ISR 4000 Series - Integrated Services Router providing WAN connectivity, security & application optimization for branch offices   
</p>

<h4>Firewalls (Layer 4-7)</h4>
<p>
Function: Monitor & control incoming/outgoing network traffic based on security rules & policies. <br><br>
Key Features: Stateful inspection, IPS/IDS, application filtering, VPN concentrator <br><br>
Example: Cisco Firepower - Next-generation firewall with threat intelligence, malware protection, & application visibility & control
</p>

<h4>Access Points (Layer 2)</h4>
<p>
Function: provide wireless connectivity to client devices & bridge wireless to wired networks.<br><br> Key Features: Multiple SSIDS, band steering, mesh capability, centralized management<br><br>
Examples: Cisco Catalyst 9100 Series AP - WiFi 6 (802.11ax) access point supporting an aggregate data rate of up to 4.8 Gbps.
</p>

<h4> Wireless Controllers</h4>
<p>
Function: Centrally manage and configure multiple access points across the network.<br><br>
Key Features: RF management, load balancing, guest access, mobility services<br><br>
Example: Cisco Catalyst 9800 Wireless Controller - Manages up to 6,000 access points with integrated security & analytics   
</p>

<h3> Netowrk Topologies</h3>
<p> Network topology defines the physical or logical arrangement of network devices and connections.<br>
The topology choice impacts network performance, scalability, fault tolerance, & cost.  
</p>

<h4>
  Star Topology
</h4>
<p>
Description: All devices connect to a central  hub or switch. most common in modern LANS.<rb>
Advantages: Easy troubleshooting, failure isolation, scalable<br> <br>
Disadvantages: The Central device is a  single point of failure  <br><br>
Example: Office network where all computers connect to a Cisco Catalyst switch in the server room. If one workstation fails, others remain operational
</p>

<h4>Mesh Topology</h4>
<p>Description: Every device connects to multiple other devices, creating redundant paths<br>
Types: Full mesh (all-to-all) or Partial mesh (selective connections)<br>
Advantages: High Redundancy, fault tolerance, no single point of failure <br> 
Disadvantages: Expensive, complex configuration  
</p>

<h4>Hiereachial (Three-Tier)</h4>
<p>Description: Cisco's recommended design with Core, Distribution, & Access layers<br> </p>
Layers: Core Layer; High-speed backbone connecting distribution layers<br>Distribution Layer; Aggregates access layer, applies policies<br>
Access Layer: Connects end devices to the network

<h4>Hub-and-Spoke (WAN)</h4>
<p>
  Description: Central site (hub) connects to multiple remote sites (spokes).<br>
  Advantages: Simplified management, centralized services<br>
  Disadvantages: Hub is a single point of failure, no direct spoke-to-spoke communication<br>
  Example: Company headquarters (hub) with Cisco ASR router connecting to 50 branch offices (spokes) via MPLS or VPN tunnels
</p>

<h4>Spine-Leaf (Data Center)</h4>
<p>Description: Every leaf switch connects to every spine switch in a full mesh pattern.
Advantages: Low latency, high bandwidth, predictable performance <br>
Use Case: Modern data centers with east-west traffic patterns<br>
Example: Cisco ACI fabric using Nexus 9000 switches, where 4 spine switches connect to 32 leaf switches, providing consistent two-hop latency for any server-to-server communication
</p>

<h3> Cabaling & Standards</h3>

<h3>Cable Categories (UTP)</h3>

<p>
UTP= Unshielded twisted Pair:<br><br>
UTP refers to a type of a cable construction where the internal wire paris are twisted together but lack addtional shielding around them.<br><br>
</p>
  
<h4>Key Characteristics:</h4>

<p>
Twisted pairs: The wires inside are twisted in pairs to reduce electromagentic intereference (EMI) and crosswalk-between pairs<br><br>
No shielding: Unlike STP (Shileding Twisted Pair) or FTP (Foil Twisted Pair), UTP cables dont have a metallic shiled or foild wrap around the wire pairs <br><br>
Most commmon type: UTP is the most widely used cable type for Ethernet networking in homes and offices<br><br>
UTP cables categories (↓)
</p>


<h4>Cat 5e</h4>
<p> Speed Threshold: 1Gbps<br>
Distance: 100m <br>
Enhanced to prevent crosstalk, supports Gigabit Ethernet   
</p>

 <h5>
   Cross talk on Cat5e refers to unwated signal interferences between twisted pairs of wires inside the cable 
 </h5>

<h4> Cat 6 </h4>
<p>
Speed Threshold: 1-10 Gbps<br>
  Distance:100m (1G), 55m (10g)<br>
  Larger guage wires, better peformance than Cat 5e 
</p>
<h5>
  American Wire Gauge (AWG) is used to measure the diameter of electric conducted wiring in the US<br>
  Lower AWG number=thicker wire<br>
  Higher AWG number=thinner wire 
</h5>


  <h4>Cat 6a</h4>
<p>
  Speed Threshold: 10 Gbps<BR>
  Distance:100m<br>
  Best balance for modern networks 500 Mhz bandwith
</p>
<h5>
  Network bandiwth is a measurement indicating the maxium capacity of a wire or wireless communications link to transmit data over a network connnection in a given time 
</h5>

<h4>Cat 7</h4>
<p>
  Spped Threshold:10 Gbps<br>
  Distance: 100M<br>
  Shielded twisted pair with enhanced electromagnetic (EMI protection)
</p>
<h5>
 EMI is unwanted electrical noise or disortion cuased by external electromagentic singals that can disrupt network cables & degrade data transmission 
</h5>
  
<h3>Cable types & Wiring Standards</h3>

<h4>Straight-Through Cable </h4>
<p>
  Most common type - connects different devices<br>
  Common uses:<br>
  PC-> Switch<br>
  Router->Switch<br>
  PC -> Router
</p>
<h5>Pinout Configuration:<br>
Both ends: Same wire order (T568A or T568B)<br>
T-568B being the standard 
</h5>

<h4>Crossover Cable</h4>
<p>
  Connects simliar devices directly<br>
  Common uses:<br>
  PC->PC<br>
  Switch->Switch <br>
  Router->Router 
  <h5>
    Pinout Configuration:<br>
    Crossed Layout: Pin 1->3, Pin 2->6, Pin 3->1, Pin 6->2<br>
    One end T568A & other T568B
  </h5>

</p>
