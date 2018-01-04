# OpenResty 技术图谱

## Basic Concepts
- HTTP / HTTP2
- RESTful API & API GateWay
- Microservice
- Domain Specific Language(DSL)
- C10K & C1M
- non-blocking & asynchronous I/O
- event loop
- I/O mutiplexing
- Streaming processing
- coroutine
- Test Driven Development(TDD)

## Around Tech Stack
- MySQL
- PostgreSQL
- Redis
- OpenSSL
- regex
- sregex

## Testing
- TDD & Unit Testing
- Test::Nginx
- curl & ab & wrk

## Debugging
- debugging log
- core dump
- Dynamic Tracing
- SystemTap
- Flame Graph
- on-CPU & off-CPU
- nginx-systemtap-toolkit
- stapxx
- nginx-gdb-utils
- valgrind

## Caching
- ngx.shared.DICT
- lua-resty-lrucache
- dog-pile effect
- lua-resty-lock
- lua-resty-shcache
- ngx_srcache

## Limiting Traffic
- lua-resty-limit-traffic
- limit-count
- limit-rate
- limit-concurrency

## NGINX
- log
- static file
- load balancer
- proxy
- phase
- tuning for performance
- if is evil
- Stream module

## LuaJIT
- Standard Lua
- JIT（Just-In-Time Compiler）
- NYI (Not Yet Implemented)
- ffi.\* API
- jit.\* Library

## ngx\_lua
- directives
- NGINX API for Lua(ngx.\*,tcpsock.\*,coroutine.\*)
- resty-core
- semaphore
- balancer\_by\_lua
- ssl\_certificate\_by\_lua
- stream-lua-nginx-module
- cosocket TCP/UDP
- hot load lua code
- OPM
- resty client

## Resources
- awesome-resty
