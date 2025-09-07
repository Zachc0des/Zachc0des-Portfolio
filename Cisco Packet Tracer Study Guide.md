<H1> Zachc0des Cisco Packet Tracer Study Guide </h1><BR>

<H1>File Types</H1><BR>

<H1>Logical Workspace </H1> <BR>
<H2>Device Types</H2>
<p1>Network Devices</p1><br>
<p1>Components</p1><br>
<p1>Connections</p1><br>
<p1>Miscellaneous</p1><br>
<p1>Multi User Connections</p1><br>

<h1> Part #1 Create a Network</h1>
<h2>Step 1: Add Network Devices to the Workspace</h2>
<p1>Locating End Devices:</p1><br>
<p1>PC: [End Devices]->PC</p1><br>
<p1>Laptop: [End Devices]->Laptop</p1><br>
<p1>Cable Modem: [Network Devices]->WAN Emulator->[Device Specific Box]->Cable Modem</p1>


<h2>Step 2: (Optional) Change Display name</h2>
<p1>Click the device icon in the logical workspace</p1><br>
<p1>Click the configuration tab in the device confugration window</p1><br>
<p1>Enter the name of the newly added device into the Display name field</p1>

<h2>Step 3: Add the physcial cabling between devices on the workspaces.</h3>
<h4>Using the device-type selection Box, add the physical cabaling between devices in the workspace</h4>

<p1>[Device Type selection box]->Connections->[Device Specfic Box]->Copper-Straight-Through</p1>
<h4>Interface Connection Types</h4>
<p1>Fast Ethernet0 for PC<br>
Ethernet1 for Wireless Router
</p1><br>

<h4> A: The PC & Laptop will need a copper-straight through Cable to connect to the Wire Router:</h4>
<p1>[Device-Type selection]->Connections-[Device Specific Box]->Copper-Straight-Through</p1>
<h5>Attach  to the FastEthernet0 interface of the PC and the Ethernet 1 interface of the wireless router.</h5>


<h4> B: The wireless router will need a copper straight-through cable to connect to the cable modem </h4>
<p1>[Device-Type selection]->Connections-[Device Specific Box]->Copper-Straight-Through</p1>
<h5>Attach to the internet interface of the wireless router and the Port 1 interface of the cable modem.</h5>

<h4> C: The Cable Modem will need a Coaxial cable to connect to the internet cloud.</h4>
<p1>[Device-Type-Selection]->Connections-[Device Specific Box]-> Coaxial Cable </p>
<h5>Attach to the Port 0 interface of the cable modem and the Coaxial 7 interface of the internet cloud.</h5>

<h1>Part 2: Configure the End Devices and verify Connectivity</h1><BR>
<h2>In this Part you will be connecting a PC and a Laptop to the Wireless Router</h2><BR>
<h4>The PC will be connected to the network using an Ethernet Cable<h4>
<h4>The Laptop will undergo a chip replacment in order to connect to the Network Wirelessly</h4>
<p1> The Wired Ethernet Network Interface Card [NIC] will be replaced with a [Wireless NIC] and will sustain a connection to the router wirelessly </P1>



