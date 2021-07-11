#!/usr/bin/env node

/**
 * Module dependencies.
 */
import app from "../app";
import debug from "debug";
import http from "http";

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normali<e a port into a number, string or false.
 * @param val port number
 * @returns port number sanitized
 */
function normalizePort(val: any) {
	let port = parseInt(val, 10);

	if (isNaN(port)) {
		return val;
	}

	if (port >= 0) {
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 * @param error error fired
 */
function onError(error: any) {
	if (error.syscall !== "listen") {
		throw error;
	}

	let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
		default:
			throw error;
	}
}

function onListening() {
	let addr: any = server.address();
	let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
	debug("Listening on " + bind);
}
