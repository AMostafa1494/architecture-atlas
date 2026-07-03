#!/usr/bin/env python3
"""Serve the generated static site in dist/ (runs build first)."""
import http.server, socketserver, functools, os, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(HERE, "dist")
PORT = 8000

# (re)build so the served site is always current
subprocess.run([sys.executable, os.path.join(HERE, "build.py")], check=True)

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIST)
with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Architecture Atlas → http://0.0.0.0:{PORT}  (serving {DIST})")
    httpd.serve_forever()