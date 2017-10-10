# OpenResty 技术图谱
## basic concepts
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

## around tech stack
- MySQL
- Postgres
- Redis
- OpenSSL
- regex
- sregex

## testing
- TDD & Unit Testing
- Test::Nginx
- curl & ab & wrk

## debugging
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

## caching
- ngx.shared.DICT
- lua-resty-lrucache
- dog-pile effect
- lua-resty-lock
- lua-resty-shcache
- ngx_srcache

## limiting traffic
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

## resources
- awesome-resty
