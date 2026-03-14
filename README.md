In Express.js, res.send() sends data like text or JSON from the server, 
while res.sendFile() sends an actual file such as an HTML page. Use res.send() 
for API responses and res.sendFile() for web pages.

Why the path Module Is Needed

In Node.js, the path module creates correct file paths. Without it,
a relative path like public/index.html may fail if the server runs from a different directory.

Adding a Third Page

Create menu.html in the public folder, then add a /menu route in Express.js using res.sendFile() with path.join().
