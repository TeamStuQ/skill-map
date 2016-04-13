# OpenResty 技术图谱
## basic concepts
- HTTP
- RESTful API & API GateWay
- Microservice
- Domain Specific Language(DSL)
- C10K & C1M
- non-blocking & asynchronous I/O
- event loop
- coroutine
- Test Driven Development(TDD)

## around tech stack
- MySQL
- Redis
- Kafka
- Docker
- KONG
- regex

## testing
- TDD & Unit Testing
- Test::Nginx
- curl & ab & wrk

## debugging
- debugging log
- core dump
- flame graph
- on-CPU & off-CPU
- nginx-systemtap-toolkit
- stapxx
- nginx-gdb-utils

## caching
- ngx.shared.DICT
- lua-resty-lrucache
- dog-pile effect
- lua-resty-lock
- lua-resty-shcache

## NGINX
- log
- static file
- load balancer
- proxy
- phase
- tuning for performance
- if is evil

## LuaJIT
- Standard Lua
- JIT（Just-In-Time Compiler）
- NYI (Not Yet Implemented)
- ffi.\* API
- jit.\* Library

## ngx_lua
- directives
- Nginx API for Lua(ngx.\*,tcpsock.\*,coroutine.\*)
- resty-core
- semaphore
- balancer_by_lua
- ssl_certificate_by_lua
- cosocket TCP/UDP
- hot load lua code
