
During this lab, I learned that res.send() sends data like text, JSON, 
or HTML directly from the server, while res.sendFile()
is used to send an actual file such as an HTML page.
I would use res.send() for API responses or simple messages and res.sendFile() when delivering full web pages.

I also learned why the path module is important.
It ensures the server can locate files correctly on any
operating system. Using a relative path like 'public/index.html' might fail if the server is run from a different folder.

Finally, adding a third page, like a menu page, 
involves creating a new HTML file in the public folder,
defining a new route in server.js (e.g., /menu), and using
res.sendFile() with path.join() to serve the file. Linking the pages together allows smooth navigation between them.

This activity reinforced the importance of clean routing, safe file paths, and organizing server responses for a functional multi-page website.
